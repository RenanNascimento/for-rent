from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import json
import boto3
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
s3 = boto3.client('s3', aws_access_key_id=os.environ['S3_KEY'], aws_secret_access_key=os.environ['S3_SECRET'])
s3.download_file('for-rent-app', 'model.joblib', 'model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
     clf = joblib.load('model.joblib')
     req = request.json
     data = json.loads(req['data'])
     arr = np.array(data)
     prediction = clf.predict(arr)
     return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(threaded=True, port=5000)