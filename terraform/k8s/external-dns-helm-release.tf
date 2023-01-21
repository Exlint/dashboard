resource "helm_release" "external_dns" {
  name       = "external-dns"
  repository = "https://kubernetes-sigs.github.io/external-dns/"
  chart      = "external-dns"
  namespace  = "default"
  timeout    = 200
  atomic     = false

  values = [
    file("./resources/external-dns-values.yaml")
  ]

  set {
    name  = "region"
    value = var.aws_region
  }
  set {
    name  = "serviceAccount.name"
    value = kubernetes_service_account.external_dns.metadata.0.name
  }

  depends_on = [
    aws_route53_zone.primary,
    aws_iam_role_policy_attachment.external_dns,
    aws_iam_policy.external_dns
  ]
}
