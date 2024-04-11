import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Inf from './../images/info.png';

function Info() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/products/${productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <img src={Inf} alt='info' width={'1500px'}/>
          <h2>{product.title}</h2>
          <p>Old Price: ${product.oldprice}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Info;
