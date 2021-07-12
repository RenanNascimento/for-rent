import numpy as np
import joblib
import boto3
import json
import sklearn

s3 = boto3.client('s3')

def lambda_handler(event, context):
    bucket = "for-rent"
    key = "model.joblib"
    
    response = s3.get_object(Bucket=bucket, Key=key)

    model = joblib.load(response['Body'].read())

    data = json.loads(event['body'])
    prediction = model.predict(np.array(data))
    output = prediction[0]
    prediction_response = {'response': output}
    
    return {
        'statusCode': 200,
        'body': prediction_response
    }
