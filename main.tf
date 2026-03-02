resource "cloudflare_workers_script" "backend" {
  account_id = var.account_id
  name       = "sejal-backend-worker"
  content    = file("${path.module}/worker/index.js")

  lifecycle {
    ignore_changes = [content]
  }
}

resource "cloudflare_pages_project" "frontend" {
  account_id        = var.account_id
  name              = "sejal-frontend"
  production_branch = "main"

  source {
    type = "github"

    config {
      owner                         = var.github_owner
      repo_name                     = var.github_repo
      production_branch             = "main"
      deployments_enabled           = true
      production_deployment_enabled = true
    }
  }

  build_config {
    root_dir        = "frontend"
    build_command   = null
    destination_dir = null
  }
}