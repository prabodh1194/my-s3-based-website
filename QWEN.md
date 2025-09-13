# Project Overview

This is a React-based static website hosted on AWS using S3, CloudFront, and Route53. The website is deployed at prabodhagarwal.com and openn.ai. The project uses OpenTofu for infrastructure as code to manage all AWS resources and includes a Lambda function for automatic CloudFront cache invalidation when content is updated.

## Technologies Used

- **Frontend**: React with React Router, Bootstrap, FontAwesome
- **Infrastructure**: AWS (S3, CloudFront, Route53, Lambda, IAM)
- **Infrastructure as Code**: OpenTofu
- **Deployment**: npm scripts, AWS CLI, Makefile
- **CI/CD**: Manual deployment process with automatic cache invalidation

## Key Features

1. **Static Website Hosting**: Hosted on AWS S3 with CloudFront CDN for global distribution
2. **Custom Domain**: Configured with Route53 DNS and SSL certificates via ACM
3. **Automatic Cache Invalidation**: Lambda function triggered by S3 events to invalidate CloudFront cache
4. **Dual Domain Support**: Available at both prabodhagarwal.com and openn.ai
5. **Blog System**: Dynamic blog routing with date-based paths
6. **OpenTofu State Management**: Remote state stored in S3

## Infrastructure Components

### S3
- Website content bucket: `pbd-website`
- OpenTofu state bucket: `pbd-terraform-state-bucket`
- Private access with CloudFront Origin Access Control

### CloudFront
- CDN distribution with SSL/TLS encryption
- Custom error responses redirecting 404/403 to index.html (for SPA routing)
- Connected to S3 bucket via Origin Access Control

### Route53
- Hosted zones for prabodhagarwal.com and openn.ai
- A/AAAA records pointing to CloudFront distribution

### Lambda
- Automatic cache invalidation when S3 objects are created/updated
- Triggered by S3 bucket notifications
- IAM role with CloudFront invalidation permissions

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

## Building and Deployment

### Build Process
```bash
npm run build
# or
make build
```

### Deployment Process
```bash
make deploy
# This runs:
# 1. npm run build
# 2. aws s3 sync --delete build s3://pbd-website
```

### OpenTofu Operations
```bash
# Initialize OpenTofu
tofu -chdir=deployment/terraform init

# Apply infrastructure changes
tofu -chdir=deployment/terraform apply
```

## Environment Variables

The Lambda function requires:
- `DISTRIBUTION_ID`: CloudFront distribution ID (set via OpenTofu)

## Development Conventions

- React components are in the `src/` directory
- Blog posts are individual React components in `src/blogs/` with metadata (name, created_on date)
- Blog posts are dynamically imported and routed in App.js
- OpenTofu files are organized by service (s3.tf, cloudfront.tf, etc.)
- All AWS resources are managed through OpenTofu
- Lambda function is automatically packaged and deployed via OpenTofu

## Application Architecture

### Frontend Structure
- **App.js**: Main application component with routing
- **Top.js**: Layout component (header/navigation)
- **Main.js**: Home page content
- **Blog.js**: Blog listing page
- **BlogElement.js**: Individual blog post rendering
- **About.js**: About page
- **blogs/**: Directory containing individual blog post components
- **dates/**: Custom date utility functions
- **formats/**: Text formatting utilities

### Blog System
Blog posts are React components with metadata:
```javascript
// Example blog structure
export const name = "Blog Title";
export const created_on = new MyDate(2018, 8, 8);

export const mod = () => {
    return (
        // Blog content as JSX
    );
};
```

The App.js dynamically imports all blog files and creates routes for them.

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build production assets |
| `make deploy` | Build and deploy to S3 |
| `tofu -chdir=deployment/terraform init` | Initialize OpenTofu |
| `tofu -chdir=deployment/terraform apply` | Deploy infrastructure changes |

## Troubleshooting

1. If the website is not updating after deployment, check CloudFront cache invalidation logs in CloudWatch
2. For routing issues, verify CloudFront custom error responses are configured correctly
3. For DNS issues, check Route53 hosted zones and record sets