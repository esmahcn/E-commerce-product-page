import React, { useState } from "react";

export default function ProductPage({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.thumbnail);

  if (!product) return null;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg my-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
          <div className="flex space-x-3">
            {[product.thumbnail, product.images?.[0], product.images?.[1]]
              .filter(Boolean)
              .map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.title} thumbnail ${i}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                    selectedImage === img ? "border-blue-600" : "border-gray-300"
                  }`}
                />
              ))}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold mb-4">${product.price}</p>
            <p className="text-yellow-500 mb-6">
              Rating: {product.rating} ⭐
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Select Size</h3>
              <div className="flex space-x-3">
                {[38, 39, 40, 41, 42, 43].map((size) => (
                  <button
                    key={size}
                    className="border rounded px-4 py-2 hover:bg-blue-600 hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6 flex items-center space-x-4">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}