resource "kubernetes_deployment_v1" "backend" {
  metadata {
    name      = "dashboard-backend-deployment"
    namespace = "default"
    labels = {
      app = "backend"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "backend"
      }
    }

    template {
      metadata {
        labels = {
          app = "backend"
        }
      }

      spec {
        container {
          image             = "${data.aws_ecr_repository.backend.repository_url}:${var.api_image_tag}"
          name              = "backend"
          image_pull_policy = "Always"

          liveness_probe {
            http_get {
              path = "/health/version"
              port = 80
            }

            period_seconds        = 5
            initial_delay_seconds = 10
          }

          port {
            container_port = 80
            name           = "backend"
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
            name  = "ACCESS_TOKEN_JWT_KEY"
            value = var.access_token_jwt_key
          }

          env {
            name  = "REFRESH_TOKEN_JWT_KEY"
            value = var.refresh_token_jwt_key
          }

          env {
            name  = "GOOGLE_OAUTH_CLIENT_ID"
            value = var.google_oauth_client_id
          }

          env {
            name  = "GOOGLE_OAUTH_CLIENT_SECRET"
            value = var.google_oauth_client_secret
          }

          env {
            name  = "GOOGLE_OAUTH_REDIRECT_URI"
            value = var.google_oauth_redirect_uri
          }

          env {
            name  = "GH_OAUTH_CLIENT_ID"
            value = var.gh_oauth_client_id
          }

          env {
            name  = "GH_OAUTH_CLIENT_SECRET"
            value = var.gh_oauth_client_secret
          }

          env {
            name  = "GITHUB_OAUTH_REDIRECT_URI"
            value = var.gh_oauth_redirect_uri
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

