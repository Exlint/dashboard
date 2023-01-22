resource "kubernetes_deployment_v1" "backend" {
  metadata {
    name      = "dashboard-backend-deployment"
    namespace = "default"
    labels = {
      app = "backend"
    }
  }

  spec {
    replicas = 2

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
          image             = data.aws_ecr_repository.backend.repository_url
          name              = "backend"
          image_pull_policy = "Always"

          port {
            container_port = 80
            name           = "backend"
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

