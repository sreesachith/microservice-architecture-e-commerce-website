import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Import CSS for styling

const ProductCard = ({ product }) => {
  const productUrl = `/ProductDetail?productName=${encodeURIComponent(product.name)}`;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="ProductImage" className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">Rs.{product.price}</p>
        <Link to={productUrl} className="view-details-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
