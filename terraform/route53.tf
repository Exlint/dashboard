resource "aws_route53_zone" "primary" {
  name = var.domain_name

  tags = merge(
    var.tags,
    {
      Name = "${var.project}-Route53-zone",
    }
  )
}

resource "aws_route53_record" "frontend_record" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "app"
  type    = "A"

  alias {
    name                   = module.cdn.cloudfront_distribution_domain_name
    zone_id                = module.cdn.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_s3_bucket" "redirecter_bucket" {
  bucket = "www.${var.frontend_domain_name}"
}

resource "aws_s3_bucket_website_configuration" "redirecter_config" {
  bucket = aws_s3_bucket.redirecter.bucket

  redirect_all_requests_to {
    host_name = var.frontend_domain_name
    protocol  = "https"
  }
}

resource "aws_route53_record" "this" {
  zone_id = aws_route53_zone.this.zone_id
  name    = "www.${var.frontend_domain_name}"
  type    = "A"

  alias {
    name                   = aws_s3_bucket_website_configuration.redirecter_config.website_domain
    zone_id                = aws_s3_bucket.redirecter_bucket.hosted_zone_id
    evaluate_target_health = true
  }
}
