resource "aws_route53_zone" "primary" {
  name = var.domain_name
  force_destroy = true

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project}-Route53-zone",
    }
  )
}
