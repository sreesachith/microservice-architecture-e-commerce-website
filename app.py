from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_cors import CORS

app = Flask(_name_)
CORS(app, resources={r"/api/": {"origins": ""}})



# MongoDB configuration
app.config['MONGO_URI'] = 'mongodb+srv://sirigowriharish:test123@ecommerce.z0fq9y3.mongodb.net/ecommerce'
mongo = PyMongo(app)
products_collection = mongo.db.channapatna
cart=mongo.db.cart
users_collection = mongo.db.users
    
# Route to add a product to the cart
@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    try:
        data = request.json
        # Validate incoming data
        if 'product_name' not in data:
            return jsonify({'error': 'Missing required fields'}), 400

        # Check if the product exists
        product = products_collection.find_one({'name': data['product_name']}, {'_id': 1})
        if not product:
            return jsonify({'error': 'Product not found'}), 404

        # Add the product to the cart
        cart_item = {
            'product_id': str(product['_id']),
            'name': data['product_name'],
            'image':data['product_image'],
            'quantity': 1  # Default quantity
        }
        cart.insert_one(cart_item)
        return jsonify({'message': 'Product added to cart successfully'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    
    
@app.route('/api/cart', methods=['GET'])
def get_cart_items():
    try:
        cart_items = list(cart.find({}, {'_id': 0}))
        return jsonify(cart_items)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
if _name_ == '_main_':
    app.run(debug=True)