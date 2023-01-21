data "aws_eks_cluster" "main" {
  name = "${var.project}-cluster"
}

data "aws_eks_cluster_auth" "main" {
  name = data.aws_eks_cluster.main.name
}
