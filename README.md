#### Create resource
```bash
aws cloudformation create-stack --stack-name "my-website-repo" --template-body "file://$PWD/my-website-repo.yml"
```

#### How to deploy
```bash
aws cloudformation update-stack --stack-name "my-website-repo" --template-body "file://$PWD/my-website-repo.yml"
npm run build
aws s3 sync build s3://pbd-website
```
