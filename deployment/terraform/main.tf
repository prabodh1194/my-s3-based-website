terraform {
  backend "s3" {
    bucket         = "pbd-terraform-state-bucket"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "pbd-terraform-state-bucket"

  tags = {
    Name        = "Terraform State Bucket"
    Environment = "Terraform"
  }
}
