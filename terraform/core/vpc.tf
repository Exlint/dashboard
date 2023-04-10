module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "4.0.0"

  name = "main"
  cidr = var.vpc_cidr
  azs  = slice(data.aws_availability_zones.available.names, 0, var.availability_zones_count)

  # https://aws.github.io/aws-eks-best-practices/networking/subnets/#using-private-and-public-subnets
  private_subnets = [cidrsubnet(var.vpc_cidr, var.subnet_cidr_bits, 0), cidrsubnet(var.vpc_cidr, var.subnet_cidr_bits, 1)]
  public_subnets  = [cidrsubnet(var.vpc_cidr, var.subnet_cidr_bits, 2), cidrsubnet(var.vpc_cidr, var.subnet_cidr_bits, 3)]

  enable_nat_gateway = true
  single_nat_gateway = true

  # https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html
  # https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-support
  enable_dns_hostnames = true

  tags = var.common_tags

  vpc_tags = {
    Name                                           = "${var.project}-vpc",
    "kubernetes.io/cluster/${var.project}-cluster" = "shared"
  }

  public_subnet_tags = {
    Name = "${var.project}-public-subnet",
    # https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.1/deploy/subnet_discovery/#common-tag
    "kubernetes.io/cluster/${var.project}-cluster" = "shared"
    # https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.1/deploy/subnet_discovery/#public-subnets
    "kubernetes.io/role/elb" = 1
  }

  private_subnet_tags = {
    Name = "${var.project}-private-subnet"
    # https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.1/deploy/subnet_discovery/#common-tag
    "kubernetes.io/cluster/${var.project}-cluster" = "shared"
    # https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.1/deploy/subnet_discovery/#private-subnets
    "kubernetes.io/role/internal-elb" = 1
  }
}
