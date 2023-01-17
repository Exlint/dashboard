provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}

resource "aws_acm_certificate" "primary" {
  domain_name               = var.domain_name
  validation_method         = "DNS"
  subject_alternative_names = ["*.${var.domain_name}"]
  provider                  = aws.virginia

  lifecycle {
    create_before_destroy = true
  }

  tags = merge(
    var.tags,
    {
      Name = "${var.project}-ACM-certificate",
    }
  )
}

resource "aws_route53_record" "certificate_validator_record" {
  allow_overwrite = true
  name            = tolist(aws_acm_certificate.primary.domain_validation_options)[0].resource_record_name
  records         = [tolist(aws_acm_certificate.primary.domain_validation_options)[0].resource_record_value]
  type            = tolist(aws_acm_certificate.primary.domain_validation_options)[0].resource_record_type
  zone_id         = aws_route53_zone.primary.zone_id
  ttl             = 60
}

resource "aws_acm_certificate_validation" "certificate_validator" {
  certificate_arn         = aws_acm_certificate.primary.arn
  validation_record_fqdns = [aws_route53_record.certificate_validator_record.fqdn]
}
