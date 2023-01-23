resource "kubernetes_service_v1" "backend_service" {
  metadata {
    name      = "backend-service"
    namespace = "default"
  }
  spec {
    selector = {
      app = kubernetes_deployment_v1.backend.metadata.0.labels.app
    }

    port {
      port        = 80
      target_port = 80
    }

    # Why NodePort - https://stackoverflow.com/a/73582930/9105207
    type = "ClusterIP"
  }
}
