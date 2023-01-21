module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.5.1"

  cluster_name    = "${var.project}-cluster"
  cluster_version = "1.24"
  subnet_ids      = module.vpc.private_subnets
  vpc_id          = module.vpc.vpc_id

  eks_managed_node_groups = {
    first = {
      desired_capacity = 1
      max_capacity     = 2
      min_capacity     = 1

      instance_type = "t3.small"
      capacity_type = "ON_DEMAND"
      disk_size     = 20
      ami_type      = "AL2_x86_64"
    }
  }

  tags = merge(
    var.common_tags,
    {
      Stack = "backend"
      Name  = "${var.project}-eks-cluster",
    }
  )
}

module "eks-kubeconfig" {
  source  = "hyperbadger/eks-kubeconfig/aws"
  version = "2.0.0"

  cluster_name = module.eks.cluster_name
  depends_on   = [module.eks]
}
