resource "aws_s3_bucket" "website" {
  bucket = "pbd-website"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "website" {
  bucket = aws_s3_bucket.website.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Id      = "WebsiteBucketPrivacyPolicy"
    Statement = [
      {
        Sid       = "PolicyForCloudFrontPrivateContent"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" },
        Action    = "s3:GetObject*",
        Resource  = "${aws_s3_bucket.website.arn}/*",
        Condition = {
          StringEquals = {
            "aws:SourceArn" = aws_cloudfront_distribution.CFDistribution.arn
          }
        }
      }
    ]
  })
}

output "website_bucket_name" {
  value = aws_s3_bucket.website.bucket
}