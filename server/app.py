from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import json

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
     clf = joblib.load('model/model.joblib')
     req = request.json
     data = json.loads(req['data'])
     arr = np.array(data)
     prediction = clf.predict(arr)
     return jsonify({'prediction': list(prediction)})

if __name__ == '__main__':
    app.run(threaded=True, port=5000)