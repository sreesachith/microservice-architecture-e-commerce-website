import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="w-full border-[1px] px-2 py-4">
            <div className="flex justify-between items-center"></div>
            <div>
                <img src={product.image} alt="Product image" />
            </div>
            <div>
                <h2 className="font-titlefont text-base font-bold">
                    {product.title}
                </h2>
                <p>${product.oldprice}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;