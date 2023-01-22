data "aws_eks_cluster" "main" {
  name = "${var.project}-cluster"
}

data "aws_eks_cluster_auth" "main" {
  name = data.aws_eks_cluster.main.name
}

data "aws_iam_openid_connect_provider" "main" {
  url = data.aws_eks_cluster.main.identity[0].oidc[0].issuer
}

data "aws_region" "current" {}

data "aws_ecr_repository" "backend" {
  name = var.backend_repository
}

data "aws_ecr_repository" "cli-backend" {
  name = var.cli_backend_repository
}
