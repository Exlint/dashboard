terraform {
  backend "s3" {
    bucket         = var.terraform_backend_s3_bucket
    dynamodb_table = var.terraform_backend_dynamodb_table
    key            = "terraform-aws-dashboard.tfstate"
    region         = var.aws_region
    encrypt        = true
  }
}
