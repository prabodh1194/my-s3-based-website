#### Create resource
```bash
terraform -chdir=deployment/terraform init
terraform -chdir=deployment/terraform apply
```

#### How to deploy
```bash
npm run build
aws s3 sync build s3://pbd-website
```
