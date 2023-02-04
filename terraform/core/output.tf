output "frontend_cloudfront_distribution_id" {
  description = "The distribution ID of deployed Cloudfront frontend"
  value       = module.frontend-static.cloudfront_distribution_id
}

output "docs_cloudfront_distribution_id" {
  description = "The distribution ID of deployed Cloudfront docs"
  value       = module.docs-static.cloudfront_distribution_id
}

output "landing_page_cloudfront_distribution_id" {
  description = "The distribution ID of deployed Cloudfront landing-page"
  value       = module.landing-page-static.cloudfront_distribution_id
}

output "eks_kubeconfig" {
  description = "EKS Kubeconfig content"
  value       = module.eks-kubeconfig.kubeconfig
  sensitive   = true
}
