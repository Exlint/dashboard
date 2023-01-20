# CloudFront supports US East (N. Virginia) Region only.
provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

module "acm_cloudfront" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 4.3.1"

  providers = {
    aws = aws.us-east-1
  }

  domain_name               = var.domain_name
  zone_id                   = aws_route53_zone.primary.zone_id
  wait_for_validation       = true
  subject_alternative_names = ["*.${var.domain_name}"]

  tags = merge(
    var.tags,
    {
      Name  = "${var.project}-ACM-Cloudfront-certificate"
      Stack = "frontend"
    }
  )
}

module "acm_ingress" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 4.3.1"

  domain_name               = var.domain_name
  zone_id                   = aws_route53_zone.primary.zone_id
  wait_for_validation       = true
  subject_alternative_names = ["*.${var.domain_name}"]

  tags = merge(
    var.tags,
    {
      Name  = "${var.project}-ACM-Ingress-certificate"
      Stack = "backend"
    }
  )
}
