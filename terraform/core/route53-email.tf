resource "aws_route53_record" "email_txt_microsoft" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "TXT"
  ttl     = 300

  records = ["NETORGFT10830933.onmicrosoft.com"]
}

resource "aws_route53_record" "email_txt_spf1" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "TXT"
  ttl     = 300

  records = ["v=spf1 include:secureserver.net -all"]
}

resource "aws_route53_record" "email_cname_autodiscover" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "autodiscover"
  type    = "CNAME"
  ttl     = 300
  records = ["autodiscover.outlook.com"]
}

resource "aws_route53_record" "email_cname_sip" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "sip"
  type    = "CNAME"
  ttl     = 300
  records = ["sipdir.online.lync.com"]
}

resource "aws_route53_record" "email_cname_lyncdiscover" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "lyncdiscover"
  type    = "CNAME"
  ttl     = 300
  records = ["webdir.online.lync.com"]
}

resource "aws_route53_record" "email_cname_email" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "email"
  type    = "CNAME"
  ttl     = 300
  records = ["email.secureserver.net"]
}

resource "aws_route53_record" "email_cname_msoid" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "msoid"
  type    = "CNAME"
  ttl     = 300
  records = ["clientconfig.microsoftonline-p.net"]
}

resource "aws_route53_record" "email_mx" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "MX"
  ttl     = 300
  records = ["0 exlint-io.mail.protection.outlook.com"]
}

resource "aws_route53_record" "email_srv_sipdir" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "SRV"
  ttl     = 300
  records = ["100 1 443 sipdir.online.lync.com"]
}

resource "aws_route53_record" "email_srv_sipfed" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "SRV"
  ttl     = 300
  records = ["100 1 5061 sipfed.online.lync.com"]
}
