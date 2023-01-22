## Resources
https://github.com/ishuar/terraform-eks/tree/main/examples/cluster_with_alb

https://github.com/hashicorp/terraform-provider-kubernetes/tree/main/_examples/eks

## Workspace
By keeping the two providers' resources in separate Terraform states (or separate workspaces using [Terraform Cloud](https://app.terraform.io/)), we can limit the scope of changes to either the EKS cluster or the Kubernetes resources. This will prevent dependency issues between the AWS and Kubernetes providers, since terraform's [provider configurations must be known before a configuration can be applied](https://www.terraform.io/docs/language/providers/configuration.html).