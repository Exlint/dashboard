output "cloudfront_distribution_domain_name" {
  value = module.cdn.cloudfront_distribution_domain_name
}

output "cluster_name" {
  value = aws_eks_cluster.main.name
}

output "cluster_endpoint" {
  value = aws_eks_cluster.main.endpoint
}
