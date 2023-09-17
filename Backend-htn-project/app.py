import time
from flask import Flask, jsonify, request, Response
import pandas as pd
import csv
app = Flask(__name__)

@app.route('/get_latest_et_data', methods=['GET'])
def get_latest_et_data():
    data = []
    with open('data.csv', 'r') as file:
        reader = csv.reader(file)
        for row in reader:
            data.append(row)
            
    return data

app.run()

