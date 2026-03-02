## Cloudflare Workers + Pages Deployment using Terraform
Overview :

This project demonstrates Infrastructure as Code (IaC) using Terraform to deploy:

Backend API on Cloudflare Workers

Frontend Application on Cloudflare Pages

GitHub integration for automatic deployment

## Architecture

Frontend (Cloudflare Pages)

Backend API (Cloudflare Workers)

## Technologies Used

Terraform

Cloudflare Workers

Cloudflare Pages

GitHub

## Project Structure

├── main.tf
├── provider.tf
├── variables.tf
├── outputs.tf
├── terraform.tfvars
├── worker/
│   └── index.js
├── frontend/
│   └── index.html

## Prerequisites

Terraform installed

Cloudflare account

Cloudflare API token

GitHub repository

## Deployment Steps
1. Clone Repository :

git clone https://github.com/Sejalthakur17/sejal-cloudflare-workers-pages.git
cd sejal-cloudflare-workers-pages

2. Configure Variables

Edit terraform.tfvars:

cloudflare_api_token = "YOUR_TOKEN"
account_id           = "YOUR_ACCOUNT_ID"
github_owner         = "YOUR_GITHUB_USERNAME"
github_repo          = "YOUR_REPO_NAME"

3. Initialize Terraform :

terraform init

4. Review Plan :

terraform plan

5. Apply Configuration :

terraform apply

## Output

Worker URL: https://<worker-name>.workers.dev

Pages URL: https://<project-name>.pages.dev

## Loom Video

Loom link: (Add your Loom video here)