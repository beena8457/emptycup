from flask import Flask, jsonify, render_template
from flask_cors import CORS
app = Flask(__name__)


CORS(app)


# Define a route that serves the listings data as JSON
@app.route('/')
def get_listings():
    # Read data from a static JSON file
    with open('listings.json', 'r') as file:
        data = file.read()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
