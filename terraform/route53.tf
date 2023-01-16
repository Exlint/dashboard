resource "aws_route53_zone" "primary" {
  name = var.domain_name

  tags = merge(
    var.tags,
    {
      Name = "${var.project}-Route53-zone",
    }
  )
}

data "kubernetes_service" "backend" {
  metadata {
    name = "backend-service"
  }
}

data "kubernetes_service" "cli-backend" {
  metadata {
    name = "cli-backend-service"
  }
}

data "aws_elb_hosted_zone_id" "services_hosted_zone" {}


resource "aws_route53_record" "backend_record" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.api"
  type    = "A"
  ttl     = "300"

  alias {
    name                   = data.kubernetes_service.backend.status.0.load_balancer.0.ingress.0.hostname
    zone_id                = data.aws_elb_hosted_zone_id.services_hosted_zone.id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "cli_backend_record" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.cli-api"
  type    = "A"
  ttl     = "300"

  alias {
    name                   = data.kubernetes_service.cli-backend.status.0.load_balancer.0.ingress.0.hostname
    zone_id                = data.aws_elb_hosted_zone_id.services_hosted_zone.id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "frontend_record" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.app"
  type    = "A"
  ttl     = "300"

  alias {
    name                   = module.cdn.cloudfront_distribution_domain_name
    zone_id                = module.cdn.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = true
  }
}
