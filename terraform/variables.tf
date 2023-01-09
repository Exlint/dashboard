variable "aws_region" {
  description = "The AWS region to deploy the resources in"
  type        = string
}

variable "aws_access_key" {
  type      = string
  sensitive = true
}

variable "aws_secret_access_key" {
  type      = string
  sensitive = true
}

variable "terraform_backend_s3_bucket" {
  description = "Name of the S3 bucket dedicated for Terraform backend"
  type        = string
}

variable "terraform_backend_dynamodb_table" {
  description = "Name of the DynamoDB dedicated for Terraform backend"
  type        = string
}

variable "frontend_s3_bucket_name" {
  description = "Name of the S3 bucket dedicated for the dashboard frontend"
  type        = string
}

variable "vpc_cidr" {
  description = "The CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones_count" {
  description = "The number of AZs in the VPC"
  type        = number
  default     = 2
}

variable "subnet_cidr_bits" {
  description = "The number of subnet bits for the CIDR. For example, specifying a value 8 for this parameter will create a CIDR with a mask of /24"
  type        = number
  default     = 8
}