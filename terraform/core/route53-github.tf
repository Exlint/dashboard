resource "aws_route53_record" "email_txt" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "_github-challenge-Exlint-org"
  type    = "TXT"
  ttl     = 300

  records = [
    "0de2f9f777",
  ]
}
