import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.css'; // Import CSS for styling

const ProductDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productName = searchParams.get('productName');
  const [product, setProduct] = useState(null); // Declare product state variable

  const handleAddToCart = async () => {
    try {
      if (!product || !product.name) {
        throw new Error('Product name not available');
      }
      
      const response = await fetch('http://127.0.0.1:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name: product.name ,product_image: product.image}), // Sending product name in the payload
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }
      console.log('Product added to cart:', product);
      const cartUrl = 'home/cart';
      window.location.href = cartUrl;
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (productName) {
          const encodedProductName = encodeURIComponent(productName); // Encode product name
          const response = await fetch(`http://127.0.0.1:8080/api/products/name/${encodedProductName}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productName]);

  // Render product details
  return (
    <div className="product-detail-container">
      <h1>Product Detail Page</h1>
      <p>Product Name: {productName}</p>
      {product ? (
        <div className="product-detail">
          <h2>{product.name}</h2>
          <div className="product-image-container">
            <img src={product.image} alt="ProductImage" className="product-image" />
          </div>
          <div className="product-info">
            <p className="product-price">Price: Rs.{product.price}</p>
            <p className="product-desc">Description: {product.description}</p>
            {/* Add more product details as needed */}
          </div>
          <div className="product-info">
            {/* Add more product details as needed */}
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
