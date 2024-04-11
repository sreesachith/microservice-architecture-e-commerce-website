import React, { useState, useEffect } from 'react';
import '../pages/Cart.css'; // Import CSS for styling

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart-page-container">
      <h1>Cart Page</h1>
      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-image">
              <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt="ProductImage" />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: Rs.{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
