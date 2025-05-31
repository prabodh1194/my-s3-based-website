resource "aws_cloudfront_distribution" "CFDistribution" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = "myS3Origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.OAC.id
  }

  default_cache_behavior {
    allowed_methods          = ["GET", "HEAD", "OPTIONS"]
    target_origin_id         = "myS3Origin"
    viewer_protocol_policy   = "redirect-to-https"
    cache_policy_id          = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    origin_request_policy_id = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf"
    cached_methods           = [
      "GET",
      "HEAD"
    ]
  }

  price_class = "PriceClass_All"

  aliases = [aws_route53_zone.net_website_zone.name, aws_route53_zone.com_website_zone.name]

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:854955106828:certificate/f328be61-4f8a-4837-b92a-df1b7c76411e"
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method       = "sni-only"
  }
}

resource "aws_cloudfront_origin_access_control" "OAC" {
  depends_on = [aws_s3_bucket.website]

  description = "Default Origin Access Control"

  name = "my-website-oac"

  origin_access_control_origin_type = "s3"

  signing_behavior = "always"

  signing_protocol = "sigv4"
}

output "WebsiteURL" {
  value = aws_cloudfront_distribution.CFDistribution.domain_name
}
