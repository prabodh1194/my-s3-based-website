.PHONY: build deploy

help:
	@echo "build - build the website"
	@echo "deploy - deploy the website to S3"

all: deploy

build:
	npm run build

deploy: build
	AWS_PROFILE="personal-aws" aws s3 sync --delete build s3://pbd-website
