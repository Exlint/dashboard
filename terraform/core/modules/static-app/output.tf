output "cloudfront_distribution_id" {
  description = "The distribution ID of deployed Cloudfront"
  value       = module.cdn.cloudfront_distribution_id
}
