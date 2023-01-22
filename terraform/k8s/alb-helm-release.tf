resource "helm_release" "ingress" {
  name       = "aws-load-balancer-controller"
  chart      = "aws-load-balancer-controller"
  repository = "https://aws.github.io/eks-charts"
  version    = "1.4.7"
  namespace  = "kube-system"
  timeout    = 200
  atomic     = true

  values = [
    file("./resources/aws-load-balancer-controller-values.yaml")
  ]

  set {
    name  = "autoDiscoverAwsRegion"
    value = "true"
  }

  set {
    name  = "autoDiscoverAwsVpcID"
    value = "true"
  }

  set {
    name  = "clusterName"
    value = "${var.project}-cluster"
  }

  depends_on = [
    aws_iam_role_policy_attachment.alb_policy_attachment,
    aws_iam_policy.alb_controller_policy
  ]
}
