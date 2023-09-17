import time
from flask import Flask, jsonify, request, Response
import pandas as pd
app = Flask(__name__)

@app.route('/get_latest_et_data', methods=['GET'])
def get_latest_et_data():
    df = pd.read_csv('data.csv', header=None, names=["x", "y", "z", "vergence"])

    json_data_list = df[["x", "y", "z", "vergence"]].to_dict(orient="records")

    json_data_list = df[["x", "y", "z", "vergence"]].to_dict(orient="records")
    
    return json_data_list

app.run()
