output "worker_name" {
  description = "Name of deployed Cloudflare Worker"
  value       = cloudflare_workers_script.backend.name
}

output "worker_workers_dev_url" {
  description = "Workers.dev URL"
  value       = "https://${cloudflare_workers_script.backend.name}.sejalthakur016.workers.dev"
}

output "pages_project_name" {
  description = "Cloudflare Pages project name"
  value       = cloudflare_pages_project.frontend.name
}