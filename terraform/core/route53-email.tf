resource "dns_txt_record_set" "email_txt_record" {
  zone = "${aws_route53_zone.primary.name}."
  name = "@"
  txt = [
    "NETORGFT10830933.onmicrosoft.com",
    "v=spf1 include:secureserver.net -all"
  ]
}

resource "dns_cname_record" "email_cname_autodiscover_record" {
  zone  = "${aws_route53_zone.primary.name}."
  name  = "autodiscover"
  cname = "autodiscover.outlook.com."
}

resource "dns_cname_record" "email_cname_sip_record" {
  zone  = "${aws_route53_zone.primary.name}."
  name  = "sip"
  cname = "sipdir.online.lync.com."
}

resource "dns_cname_record" "email_cname_lyncdiscover_record" {
  zone  = "${aws_route53_zone.primary.name}."
  name  = "lyncdiscover"
  cname = "webdir.online.lync.com."
}

resource "dns_cname_record" "email_cname_email_record" {
  zone  = "${aws_route53_zone.primary.name}."
  name  = "email"
  cname = "email.secureserver.net."
}

resource "dns_cname_record" "email_cname_msoid_record" {
  zone  = "${aws_route53_zone.primary.name}."
  name  = "msoid"
  cname = "clientconfig.microsoftonline-p.net."
}

resource "dns_mx_record_set" "email_mx_record" {
  zone = "${aws_route53_zone.primary.name}."
  name = "@"

  mx {
    preference = 0
    exchange   = "exlint-io.mail.protection.outlook.com."
  }
}

resource "dns_srv_record_set" "email_srv_record" {
  zone = "${aws_route53_zone.primary.name}."
  name = "@"

  srv {
    priority = 100
    weight   = 1
    target   = "sipdir.online.lync.com."
    port     = 443
  }

  srv {
    priority = 100
    weight   = 1
    target   = "sipfed.online.lync.com."
    port     = 5061
  }
}
