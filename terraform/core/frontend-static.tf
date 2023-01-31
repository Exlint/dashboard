module "frontend-static" {
  source = "./modules/static-app"

  domain_name         = "app.exlint.io"
  zone_id             = aws_route53_zone.primary.zone_id
  acm_certificate_arn = module.acm_cloudfront.acm_certificate_arn
  s3_bucket_name      = var.frontend_s3_bucket_name

  common_tags = var.common_tags

  cloudfront_tags = {
    Name  = "${var.project}-Cloudfront-frontend",
    Stack = "frontend"
  }

  www_redirect_bucket_tags = {
    Name  = "${var.project}-www-to-non-www-redirect-bucket-frontend",
    Stack = "frontend"
  }

  s3_bucket_tags = {
    Name  = "${var.project}-s3-bucket-frontend",
    Stack = "frontend"
  }
}
