module "docs-static" {
  source = "../modules/static-app"

  domain_name         = "docs.exlint.io"
  zone_id             = aws_route53_zone.primary.zone_id
  acm_certificate_arn = module.acm_cloudfront.acm_certificate_arn
  s3_bucket_name      = var.docs_s3_bucket_name

  common_tags = var.common_tags

  cloudfront_tags = {
    Name  = "${var.project}-Cloudfront-docs",
    Stack = "frontend"
  }

  www_redirect_bucket_tags = {
    Name  = "${var.project}-www-to-non-www-redirect-bucket-docs",
    Stack = "frontend"
  }

  s3_bucket_tags = {
    Name  = "${var.project}-s3-bucket-docs",
    Stack = "frontend"
  }
}
