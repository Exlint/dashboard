terraform {
  backend "s3" {
    key     = "terraform-aws-dashboard.tfstate"
    encrypt = true
  }
}
