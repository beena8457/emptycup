from flask import Flask, jsonify, render_template
from flask_cors import CORS
from tinydb import TinyDB, Query

db = TinyDB('./db.json')



db.insert( {
        "name": "Epic Designs",
        "ratings": [1, 1, 1, 0.5, 0],
        "description": "from database team of 4 designers working out of Bangalore with an experience of 4 years.",
        "stats": {
        "projects": 57,
        "years": 8,
        "price": "$$"
        },
        "phoneNumbers": ["+91 - 9845322853", "+91 - 9845322854"]
    })
db.insert({
        "name": "Epic Designs 2",
        "ratings": [1, 1, 1,  1, 0.5],
        "description": "test Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "stats": {
        "projects": 43,
        "years": 6,
        "price": "$$$"
        },
        "phoneNumbers": ["+91 - 9845322853", "+91 - 9845322854"]
    })
db.insert({
        "name": "Epic Designs 3",
        "ratings": [1, 1, 1,  1, 0],
        "description": "test Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "stats": {
        "projects": 43,
        "years": 6,
        "price": "$$$"
        },
        "phoneNumbers": ["+91 - 9845322853", "+91 - 9845322854"]
    })



app = Flask(__name__)

CORS(app)


# Define a route that serves the listings data as JSON
@app.route('/')
def get_listings():



    # Read data from a static JSON file
    data = db.all()



  



    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
