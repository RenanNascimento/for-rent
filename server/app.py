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

computedStats = [
    {'mean': 133.09213820731097, 'std': 547.3613509393049}, # area
    {'mean': 2.4185027541311968, 'std': 1.121845928072441}, # rooms
    {'mean': 2.0847521281922883, 'std': 1.274496923324658}, # bathroom
    {'mean': 1.4583124687030546, 'std': 1.4582851141512991}, # parkingSpaces
    {'mean': 794.9604406609915, 'std': 872.5450298033834}, # hoa
    {'mean': 4.9591887831747625, 'std': 6.160438891006495}, # floor
    {'mean': 253.03467701552327, 'std': 394.1207563380736}, # propertyTax
    {'mean': 44.80207811717576, 'std': 34.00168299751845} # fireInsurance
]

def standardScaler(x, u, s):
    return (x - u) / s

def dataStandardScaler(num_attribs, cat_attribs):
    num_attribs_prepared = [
        standardScaler(d, computedStats[ind]["mean"], computedStats[ind]["std"]) for ind, d in enumerate(num_attribs)
    ]

    cat_attribs_prepared = [
        1 if cat_attribs[0] == '1' else 0, # sao paulo
        1 if cat_attribs[0] == '2' else 0, # rio de janeiro
        1 if cat_attribs[0] == '3' else 0, # belo horizonte
        1 if cat_attribs[0] == '4' else 0, # porto alegre
        1 if cat_attribs[0] == '5' else 0, # campinas
        1 if cat_attribs[1] else 0, # animal = True
        0 if cat_attribs[1] else 1, # animal = False
        1 if cat_attribs[2] else 0, # furniture = True 
        0 if cat_attribs[2] else 1  # furniture = False
    ]

    return [ num_attribs_prepared + cat_attribs_prepared ]

@app.route('/predict', methods=['POST'])
def predict():
    clf = joblib.load('model.joblib')
    req = request.json
    data = json.loads(req['data'])
    num_attribs = data["numAttr"]
    cat_attribs = data["catAttr"]
    dataPrepared = dataStandardScaler(num_attribs, cat_attribs)
    arr = np.array(dataPrepared)
    prediction = clf.predict(arr)

    return jsonify({'prediction': list(prediction)})

if __name__ == '__main__':
    app.run(threaded=True, port=5000)