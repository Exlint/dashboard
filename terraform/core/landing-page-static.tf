module "landing-page-static" {
  source = "../modules/static-app"

  domain_name         = "exlint.io"
  zone_id             = aws_route53_zone.primary.zone_id
  acm_certificate_arn = module.acm_cloudfront.acm_certificate_arn
  s3_bucket_name      = var.landing_page_s3_bucket_name
  not_found_file_path = "/404.html"

  common_tags = var.common_tags

  cloudfront_tags = {
    Name  = "${var.project}-Cloudfront-landing-page",
    Stack = "frontend"
  }

  www_redirect_bucket_tags = {
    Name  = "${var.project}-www-to-non-www-redirect-bucket-landing-page",
    Stack = "frontend"
  }

  s3_bucket_tags = {
    Name  = "${var.project}-s3-bucket-landing-page",
    Stack = "frontend"
  }
}
