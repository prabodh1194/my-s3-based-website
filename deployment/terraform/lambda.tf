provider "archive" {

}

# Create an IAM role for Lambda
resource "aws_iam_role" "lambda_role" {
  name = "lambda_role"
  assume_role_policy = jsonencode({
    Version   = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

data "archive_file" "lambda_code" {
  type        = "zip"
  output_path = "/tmp/lambda/lambda_function.zip"
  source_dir  = "../../lambda"
}

# Attach AWSLambdaBasicExecutionRole policy to the IAM role
resource "aws_iam_role_policy_attachment" "lambda_role_policy_attachment" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.lambda_role.name
}

resource "aws_lambda_permission" "allow_bucket" {
  statement_id  = "AllowExecutionFromS3Bucket"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.invalidate_cloudfront_cache.arn
  principal     = "s3.amazonaws.com"
  source_arn    = aws_s3_bucket.website.arn
}


# Create an AWS Lambda function
resource "aws_lambda_function" "invalidate_cloudfront_cache" {
  filename      = data.archive_file.lambda_code.output_path
  function_name = "invalidate_cloudfront_cache"
  role          = aws_iam_role.lambda_role.arn
  handler       = "invalidate_cloudfront_cache.lambda_handler"
  runtime       = "python3.10"
  environment {
    variables = {
      DISTRIBUTION_ID = aws_cloudfront_distribution.CFDistribution.id
    }
  }
}

resource "aws_s3_bucket_notification" "invalidate_cf_cache_on_s3" {
    bucket = aws_s3_bucket.website.bucket

    lambda_function {
        lambda_function_arn = aws_lambda_function.invalidate_cloudfront_cache.arn
        events              = ["s3:ObjectCreated:*"]
    }
}