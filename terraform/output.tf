output "cloudfront_distribution_id" {
  value = module.cdn.cloudfront_distribution_id
}

output "domain_certificate_arn" {
  value = aws_acm_certificate.primary.arn
}

output "eks_cluster_name" {
  description = "EKS Cluster Name"
  value       = aws_eks_cluster.main.name
}
