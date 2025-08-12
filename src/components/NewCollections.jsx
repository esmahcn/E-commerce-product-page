import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function NewCollections({ products }) {
  if (products.length < 2) {
    return <p className="text-center text-gray-500">Not enough products to display.</p>;
  }

  const leftProduct = products[0];
  const rightProduct = products[1];

  return (
    <section className="my-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      
      {/* Left side */}
      <div className="flex-1 max-w-md w-full flex flex-col items-start gap-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold">See Our New Collection</h2>
          <div className="flex gap-3">
            <button
              className="bg-black p-2 rounded-full shadow hover:bg-orange-500 transition"
              aria-label="Previous"
            >
              <FaArrowLeft className="text-orange-500" />
            </button>
            <button
              className="bg-black p-2 rounded-full shadow hover:bg-orange-500 transition"
              aria-label="Next"
            >
              <FaArrowRight className="text-orange-500" />
            </button>
          </div>
        </div>

        <img
          src={leftProduct.thumbnail}
          alt={leftProduct.title}
          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
        />
      </div>

      {/* Right side with bigger image and smaller, bordered orange button */}
      <div className="flex-1 max-w-md w-full flex flex-col gap-6">
        <img
          src={rightProduct.thumbnail}
          alt={rightProduct.title}
          className="rounded-lg shadow-md w-full h-64 object-cover"
        />
        <h2 className="text-3xl font-bold">Discover Our Latest Styles</h2>
        <p className="text-gray-600 text-lg">
          Explore fresh styles and designs, perfect for updating your wardrobe with the latest trends.
        </p>
        <button className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition font-semibold text-sm">
          Buy Now
        </button>
      </div>
    </section>
  );
}