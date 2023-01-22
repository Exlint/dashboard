resource "kubernetes_ingress_v1" "ingress" {
  metadata {
    labels = {
      "app.kubernetes.io/component"          = "api"
      "helm-release-name-aws-alb-controller" = helm_release.ingress.name      # Implicit dependency on aws alb controller
      "helm-release-external-dns"            = helm_release.external_dns.name # Implicit dependency on external-dns

    }

    name      = "api-ingress"
    namespace = "default"

    annotations = {
      "alb.ingress.kubernetes.io/scheme"       = "internet-facing"
      "alb.ingress.kubernetes.io/ssl-redirect" = "443"
      # No need to declare certificate: https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/guide/ingress/cert_discovery/
    }
  }

  spec {
    ingress_class_name = "alb"

    rule {
      host = var.backend_api_host

      http {
        path {
          path      = "/"
          path_type = "Prefix"

          backend {
            service {
              name = kubernetes_service_v1.backend_service.metadata.0.name

              port {
                number = kubernetes_service_v1.backend_service.spec.0.port.0.port
              }
            }
          }
        }
      }
    }

    rule {
      host = var.cli_backend_api_host

      http {
        path {
          path      = "/"
          path_type = "Prefix"

          backend {
            service {
              name = kubernetes_service_v1.cli_backend_service.metadata.0.name

              port {
                number = kubernetes_service_v1.cli_backend_service.spec.0.port.0.port
              }
            }
          }
        }
      }
    }
  }

  depends_on = [
    helm_release.ingress,
    helm_release.external_dns,
  ]
}
