import React from "react";
import ProductItem from "./productItem";

export default function ProductsGrid({ products }) {
  if (products.length === 0) {
    return (
      <p className="col-span-full text-center text-gray-500">
        No products match your filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}