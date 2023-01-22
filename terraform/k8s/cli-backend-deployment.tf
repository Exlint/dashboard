resource "kubernetes_deployment_v1" "cli_backend" {
  metadata {
    name      = "dashboard-cli-backend-deployment"
    namespace = "default"
    labels = {
      app = "cli-backend"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "cli-backend"
      }
    }

    template {
      metadata {
        labels = {
          app = "cli-backend"
        }
      }

      spec {
        container {
          image             = data.aws_ecr_repository.cli-backend.repository_url
          name              = "cli-backend"
          image_pull_policy = "Always"

          port {
            container_port = 80
            name           = "cli-backend"
          }

          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }

          env {
            name  = "NODE_ENV"
            value = var.node_env
          }

          env {
            name  = "PORT"
            value = 80
          }

          env {
            name  = "REFRESH_TOKEN_JWT_KEY"
            value = var.refresh_token_jwt_key
          }

          env {
            name  = "MIXPANEL_TOKEN"
            value = var.mixpanel_token
          }

          env {
            name  = "FRONTEND_URL"
            value = var.frontend_url
          }

          env {
            name  = "CLI_TOKEN_JWT_KEY"
            value = var.cli_token_jwt_key
          }

          env {
            name  = "DATABASE_URL"
            value = var.database_url
          }
        }
      }
    }
  }
}

