from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*",
      allow_headers=["Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
      supports_credentials=True)

@app.route('/')
def home():
	return jsonify({'status': 'success'})

@app.route('/', methods=['POST'])
def hello():
	print(request.json)
	return jsonify({'status': 'success'})
