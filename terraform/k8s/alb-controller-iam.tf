# https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html
# https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/install/iam_policy.json
resource "aws_iam_policy" "alb_controller_policy" {
  name        = "alb-controller-policy"
  description = "Policy for ALB controller"
  policy      = file("./resources/node-ingress-policy.json")
  path        = "/"

  tags = merge(
    var.common_tags,
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
      identifiers = [data.aws_iam_openid_connect_provider.main.arn]
    }
    condition {
      test     = "StringEquals"
      variable = "${data.aws_iam_openid_connect_provider.main.url}:sub"
      values = [
        "system:serviceaccount:kube-system:aws-load-balancer-controller"
      ]
    }
    condition {
      test     = "StringEquals"
      variable = "${data.aws_iam_openid_connect_provider.main.url}:aud"
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
    var.common_tags,
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
