import React from "react";

function ProductInfo({ mainImage }) {
  return (
    <>
      {/* Show image on mobile only */}
      <img src={mainImage} alt="Product" className="block md:hidden w-full rounded-xl mb-6" />

      <p className="uppercase text-orange-500 font-bold text-sm tracking-widest mb-3">Sneaker Company</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Fall Limited Edition Sneakers</h1>
      <p className="text-gray-600 text-base mb-6 leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-gray-900">$125.00</span>
          <span className="bg-orange-100 text-orange-500 font-bold text-sm px-2 py-1 rounded-lg">50%</span>
        </div>
        <p className="text-gray-400 line-through mt-1">$250.00</p>
      </div>
    </>
  );
}

export default ProductInfo;