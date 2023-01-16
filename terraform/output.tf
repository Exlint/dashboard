output "cloudfront_distribution_domain_name" {
  value = module.cdn.cloudfront_distribution_domain_name
}

output "cluster_kubeconfig" {
  value = module.eks-kubeconfig.kubeconfig
}

output "domain_certificate_arn" {
  value = aws_acm_certificate.primary.arn
}
