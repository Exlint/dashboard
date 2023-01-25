resource "aws_route53_record" "email_txt" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "TXT"
  records = [
    "NETORGFT10830933.onmicrosoft.com",
    "v=spf1 include:secureserver.net -all"
  ]
}

resource "aws_route53_record" "email_cname_autodiscover" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "autodiscover"
  type    = "CNAME"
  records = ["autodiscover.outlook.com"]
}

resource "aws_route53_record" "email_cname_sip" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "sip"
  type    = "CNAME"
  records = ["sipdir.online.lync.com"]
}

resource "aws_route53_record" "email_cname_lyncdiscover" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "lyncdiscover"
  type    = "CNAME"
  records = ["webdir.online.lync.com"]
}

resource "aws_route53_record" "email_cname_email" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "email"
  type    = "CNAME"
  records = ["email.secureserver.net"]
}

resource "aws_route53_record" "email_cname_msoid" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "msoid"
  type    = "CNAME"
  records = ["clientconfig.microsoftonline-p.net"]
}

resource "aws_route53_record" "email_mx" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "MX"
  records = ["0 exlint-io.mail.protection.outlook.com"]
}

resource "aws_route53_record" "email_srv" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "@"
  type    = "SRV"
  records = ["100 1 443 sipdir.online.lync.com", "100 1 5061 sipfed.online.lync.com"]
}
