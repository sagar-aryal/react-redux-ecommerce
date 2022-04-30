import React from "react";
import { useSelector } from "react-redux";

const ProductItems = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      <h1>ProductItems</h1>
      <div>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </div>
    </>
  );
};

export default ProductItems;
