variable "domain_name" {
  description = "The domain name of the application"
  type        = string
}

variable "zone_id" {
  description = "The zone identifier to set domain of the application in"
  type        = string
}

variable "acm_certificate_arn" {
  description = "The certificate ARN"
  type        = string
}

variable "s3_bucket_name" {
  description = "The bucket name of the S3 bucket for the application"
  type        = string
}

variable "common_tags" {
  description = "The tags for all created resources"
  type        = map(string)
  default     = {}
}

variable "cloudfront_tags" {
  description = "The tags for Cloudfront resource"
  type        = map(string)
}

variable "www_redirect_bucket_tags" {
  description = "The tags for a bucket to redirect www to non-www"
  type        = map(string)
}

variable "s3_bucket_tags" {
  description = "The tags for a bucket to redirect www to non-www"
  type        = map(string)
}

variable "not_found_file_path" {
  description = "The file to load when requests resource (page) not found"
  type        = string
  default     = "/index.html"
}
