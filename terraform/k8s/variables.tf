variable "project" {
  description = "Name to be used on all the resources as identifier. e.g. Project name, Application name"
  type        = string
}

variable "common_tags" {
  description = "A map of common tags to add to all resources"
  type        = map(string)
  default = {
    "Project"     = "TerraformExlintDashboard"
    "Environment" = "Production"
    "Owner"       = "Tal Rofe"
  }
}

variable "backend_repository" {
  description = "Repository name in ECR for backend"
  type        = string
}

variable "cli_backend_repository" {
  description = "Repository name in ECR for CLI backend"
  type        = string
}

variable "node_env" {
  description = "The Node environment each API runs on"
  type        = string
}

variable "access_token_jwt_key" {
  description = "Access token for JWT generation"
  type        = string
}

variable "refresh_token_jwt_key" {
  description = "Refresh token for JWT generation"
  type        = string
}

variable "google_oauth_client_id" {
  description = "Google OAuth application client ID"
  type        = string
}

variable "google_oauth_client_secret" {
  description = "Google OAuth application client secret"
  type        = string
}

variable "google_oauth_redirect_uri" {
  description = "Google OAuth application redirect URI"
  type        = string
}

variable "gh_oauth_client_id" {
  description = "GitHub OAuth application client ID"
  type        = string
}

variable "gh_oauth_client_secret" {
  description = "GitHub OAuth application client secret"
  type        = string
}

variable "gh_oauth_redirect_uri" {
  description = "GitHub OAuth application redirect URI"
  type        = string
}

variable "mixpanel_token" {
  description = "The Mixpanel token"
  type        = string
}

variable "cli_token_jwt_key" {
  description = "The CLI token JWT key"
  type        = string
}

variable "database_url" {
  description = "The database URL"
  type        = string
}

variable "backend_api_host" {
  description = "The backend API host"
  type        = string
}

variable "cli_backend_api_host" {
  description = "The CLI backend API host"
  type        = string
}
