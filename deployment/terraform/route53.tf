resource "aws_route53_zone" "net_website_zone" {
  name = "prabodhagarwal.net"
}

# Route 53 DNS Record
resource "aws_route53_record" "net_website_dns_record" {
  name    = aws_route53_zone.net_website_zone.name
  zone_id = aws_route53_zone.net_website_zone.zone_id
  type    = "A"

  alias {
    evaluate_target_health = false
    name = aws_cloudfront_distribution.CFDistribution.domain_name
    zone_id = aws_cloudfront_distribution.CFDistribution.hosted_zone_id
  }
}

resource "aws_route53_record" "net_website_dns_record_ipv6" {
  name    = aws_route53_zone.net_website_zone.name
  zone_id = aws_route53_zone.net_website_zone.zone_id
  type    = "AAAA"

  alias {
    evaluate_target_health = false
    name = aws_cloudfront_distribution.CFDistribution.domain_name
    zone_id = aws_cloudfront_distribution.CFDistribution.hosted_zone_id
  }

}
