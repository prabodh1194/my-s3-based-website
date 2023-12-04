### How did I host this website?

1. Build static content and distribute to a s3 bucket.
2. Create a cloudfront URL to the s3 bucket.
3. Create a DNS hosted zone in Route53.
4. Set the nameservers of the godaddy domain to the ones provided by Route53.
5. Using the Route53 DNS, create a certificate for the domain using letsencrypt.
6. Upload the certificate to ACM.
7. Add the CNAMES of your domain to the cloudfront distribution along with the certificate.
8. Update route53 to point to the cloudfront distribution using A records & aliases.