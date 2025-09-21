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

## Pre-commit Hooks

This project uses pre-commit hooks to ensure code quality and consistency. The hooks automatically:
- Remove trailing whitespace
- Fix end-of-file newlines
- Normalize line endings
- Check for merge conflicts

To set up pre-commit hooks:

1. Install pre-commit (if not already installed):
   ```bash
   pip install pre-commit
   ```

   Or if you're using Homebrew on macOS:
   ```bash
   brew install pre-commit
   ```

2. Install the git hooks:
   ```bash
   pre-commit install
   ```

The hooks will automatically run on every commit to ensure code consistency.

## AWS Resources

This project provisions several AWS resources using Terraform:

- S3 bucket for static website hosting
- CloudFront distribution for CDN
- Route53 DNS records
- Lambda function for cache invalidation
- SQS queues for stock name processing (with Dead Letter Queue)
