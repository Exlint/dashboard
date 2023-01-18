resource "aws_route53_zone" "primary" {
  name = var.domain_name

  tags = merge(
    var.tags,
    {
      Name = "${var.project}-Route53-zone",
    }
  )
}

resource "aws_route53_record" "www_frontend_record" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.app"
  type    = "A"

  alias {
    name                   = module.cdn.cloudfront_distribution_domain_name
    zone_id                = module.cdn.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = true
  }
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
