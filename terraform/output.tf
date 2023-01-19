output "cloudfront_distribution_id" {
  description = "The distribution ID of deployed Cloudfront"
  value       = module.cdn.cloudfront_distribution_id
}

output "domain_certificate_arn" {
  value = aws_acm_certificate.primary.arn
}

output "eks_kubeconfig" {
  description = "EKS Kubeconfig content"
  value       = module.eks-kubeconfig.kubeconfig
}
