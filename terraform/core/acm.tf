# CloudFront supports US East (N. Virginia) region only
provider "aws" {
  alias  = "cloudfront_certificates_region"
  region = "us-east-1"
}

module "acm_cloudfront" {
  source  = "terraform-aws-modules/acm/aws"
  version = "4.3.1"

  providers = {
    aws = aws.cloudfront_certificates_region
  }

  domain_name               = var.domain_name
  zone_id                   = aws_route53_zone.primary.zone_id
  subject_alternative_names = ["${var.frontend_domain_name}"]

  # Currently, domain is registered in GoDaddy, manual step is requied
  # Therefore - won't wait for certificate validation
  wait_for_validation = false

  tags = merge(
    var.common_tags,
    {
      Name  = "${var.project}-ACM-Cloudfront-certificate"
      Stack = "frontend"
    }
  )
}

module "acm_alb" {
  source  = "terraform-aws-modules/acm/aws"
  version = "4.3.1"

  domain_name               = var.domain_name
  zone_id                   = aws_route53_zone.primary.zone_id
  subject_alternative_names = ["*.${var.domain_name}"]

  # Currently, domain is registered in GoDaddy, manual step is requied
  # Therefore - won't wait for certificate validation
  wait_for_validation = false

  tags = merge(
    var.common_tags,
    {
      Name  = "${var.project}-ACM-alb-certificate"
      Stack = "backend"
    }
  )
}
