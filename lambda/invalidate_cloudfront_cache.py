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

        # invalidate CloudFront cache
        client = boto3.client('cloudfront')
        response = client.create_invalidation(
            DistributionId=os.environ['DISTRIBUTION_ID']
            InvalidationBatch={
                'Paths': {
                    'Quantity': 1,
                    'Items': [
                        f'/{key}'
                    ]
                },
                'CallerReference': 'string'
            }
        )
