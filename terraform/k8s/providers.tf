terraform {
  required_version = ">= 1.3.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.32.1"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.25.2"
    }

    helm = {
      source  = "hashicorp/helm"
      version = "2.12.1"
    }
  }
}

# Required environment variables: "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"
provider "aws" {}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.main.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.main.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.main.token
}

provider "helm" {
  kubernetes {
    host                   = data.aws_eks_cluster.main.endpoint
    cluster_ca_certificate = base64decode(data.aws_eks_cluster.main.certificate_authority.0.data)
    token                  = data.aws_eks_cluster_auth.main.token
  }
}
