data "aws_iam_policy_document" "external_dns" {
  statement {
    sid    = "externalDnsChange"
    effect = "Allow"

    actions = [
      "route53:ChangeResourceRecordSets",
      "route53:ListHostedZones",
      "route53:ListResourceRecordSets",
      "route53:GetChange",
    ]

    resources = [
      "*"
    ]
  }
}

resource "aws_iam_policy" "external_dns" {
  name        = "external-dns-policy"
  description = "Policy for external-dns"
  policy      = data.aws_iam_policy_document.external_dns.json
  path        = "/"

  tags = merge(
    var.tags,
    {
      Stack = "backend"
      Name  = "${var.project}-external-dns-policy",
    }
  )
}

data "aws_iam_policy_document" "irsa_external_dns_trust_policy_doc" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type = "Federated"
      identifiers = [
        module.eks.oidc_provider_arn
      ]
    }
    condition {
      test     = "StringEquals"
      variable = "${module.eks.cluster_oidc_issuer_url}:sub"
      values = [
        "system:serviceaccount:default:external-dns"
      ]
    }
    condition {
      test     = "StringEquals"
      variable = "${module.eks.cluster_oidc_issuer_url}:aud"
      values = [
        "sts.amazonaws.com"
      ]
    }
  }
}

resource "aws_iam_role" "external_dns" {
  name               = "external-dns-role"
  path               = "/"
  assume_role_policy = data.aws_iam_policy_document.irsa_external_dns_trust_policy_doc.json

  tags = merge(
    var.tags,
    {
      Stack = "backend"
      Name  = "${var.project}-external-dns-role",
    }
  )
}

resource "aws_iam_role_policy_attachment" "external_dns" {
  role       = aws_iam_role.external_dns.name
  policy_arn = aws_iam_policy.external_dns.arn
}
