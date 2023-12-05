import boto3
import json

def lambda_handler(event, context):
    # Log the event for debugging purposes
    print("Received event: " + json.dumps(event, indent=2))

    # Process S3 events
    for record in event['Records']:
        # Get the bucket and object key from the event
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']

        # Perform your desired actions with the S3 event
        print(f"File {key} in bucket {bucket} was modified.")

# If you want to use additional AWS services, such as SNS, SQS, etc.,
# you can modify the lambda_handler function accordingly.

# Note: Make sure to grant the Lambda function the necessary permissions
# to read events from S3. You can use the AWS IAM console to attach the
# "AmazonS3ReadOnlyAccess" policy to your Lambda function's role.
