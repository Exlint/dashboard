# ALB Policy JSON
resource "aws_iam_policy" "alb_controller_policy" {
  name        = "alb-controller-policy"
  description = "Policy for ALB controller"
  policy      = file("./resources/node-ingress-policy.json")
  path        = "/"

  tags = merge(
    var.tags,
    {
      Stack = "backend"
      Name  = "${var.project}-alb-controller-policy",
    }
  )
}

data "aws_iam_policy_document" "irsa_alb_controller_trust_policy_doc" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = [module.eks.oidc_provider_arn]
    }
    condition {
      test = "StringEquals"
      # this needs to be obtained automatically
      variable = "${module.eks.cluster_oidc_issuer_url}:sub"
      values = [
        "system:serviceaccount:kube-system:aws-load-balancer-controller"
      ]
    }
    condition {
      test = "StringEquals"
      # this needs to be obtained automatically
      variable = "${module.eks.cluster_oidc_issuer_url}:aud"
      values = [
        "sts.amazonaws.com"
      ]
    }
  }
}

resource "aws_iam_role" "alb_controller_role" {
  name               = "alb-controller-role"
  assume_role_policy = data.aws_iam_policy_document.irsa_alb_controller_trust_policy_doc.json
  path               = "/"

  tags = merge(
    var.tags,
    {
      Stack = "backend"
      Name  = "${var.project}-alb-controller-role",
    }
  )
}

resource "aws_iam_role_policy_attachment" "alb_policy_attachment" {
  role       = aws_iam_role.alb_controller_role.name
  policy_arn = aws_iam_policy.alb_controller_policy.arn
}
