import React, { useState, useEffect } from 'react';
import './Cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8081/api/cart');
        
        if (!response.ok) {
          const errorMessage = `Failed to fetch cart items: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        setCartItems(data);
        calculateTotalSum(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  const calculateTotalSum = (cartItems) => {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.price * item.quantity;
    });
    setTotalSum(sum);
  };

  const handleDeleteCartItem = async (productId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8081/api/cart/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete cart item');
      }
      const updatedCartItems = cartItems.filter(item => item.product_id !== productId);
      setCartItems(updatedCartItems);
      calculateTotalSum(updatedCartItems);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  return (
    <div className="cart-page-container">
      <h1>Cart Page</h1>
      <div className="cart-items-container">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="product-image-container">
              {/* <img src={`/Users/sirigowrih/Desktop/microservice-architecture-e-commerce-website/adroit-18/public/${item.image}`} className="product-image" alt={item.name} /> */}
              <img src={`${process.env.PUBLIC_URL}/${item.image}`} className="product-image" alt={item.name} />

              {console.log(item.image)}
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: Rs.{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button style={{ color: 'red' }} onClick={() => handleDeleteCartItem(item.product_id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
      <div className="total-sum">
        <h3>Total: Rs.{totalSum}</h3>
      </div>
    </div>
  );
};

export default CartPage;
