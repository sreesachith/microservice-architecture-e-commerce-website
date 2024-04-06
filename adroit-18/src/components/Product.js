import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import Products from './Products'; // Import the array of products (assuming it's named Products)

const Product = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h1 className="flex flex-col items-center gap-4">
        shopping everyday
      </h1>
      <span className="w-20 h-3 bg-black"></span>
      <p className="max-w-[700px] text-gray-600 text-center">
        some paragraph
      </p>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {Products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;