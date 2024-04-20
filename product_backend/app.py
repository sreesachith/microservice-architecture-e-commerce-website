from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})



# MongoDB configuration
app.config['MONGO_URI'] = 'mongodb+srv://sirigowriharish:test123@ecommerce.z0fq9y3.mongodb.net/ecommerce'
mongo = PyMongo(app)
products_collection = mongo.db.channapatna
cart=mongo.db.cart
users_collection = mongo.db.users

# Route to fetch all products
@app.route('/api/products', methods=['GET'])
def get_products():
    try:
        products = list(products_collection.find({}, {'_id': 0}))  # Exclude _id field from response
        return jsonify(products)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route to fetch a single product by ID
@app.route('/api/products/<product_id>', methods=['GET'])
def get_product_by_id(product_id):
    try:
        product = products_collection.find_one({'_id': ObjectId(product_id)}, {'_id': 0})
        if product:
            return jsonify(product)
        else:
            return jsonify({'error': 'Product not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route to fetch a single product by name
@app.route('/api/products/name/<product_name>', methods=['GET'])
def get_product_by_name(product_name):
    try:
        product = products_collection.find_one({'name': product_name}, {'_id': 0})
        if product:
            return jsonify(product)
        else:
            return jsonify({'error': 'Product not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route to add a new product
@app.route('/api/products', methods=['POST'])
def add_product():
    try:
        data = request.json
        # Validate incoming data
        if 'name' not in data or 'price' not in data:
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Insert the new product into the database
        product_id = products_collection.insert_one(data).inserted_id
        
        return jsonify({'message': 'Product added successfully', 'product_id': str(product_id)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)


