import React from "react";

export default function BestSellers({ products }) {
  if (products.length < 5) {
    return <p className="text-center text-gray-500">Not enough products to display.</p>;
  }

  const gridProducts = products.slice(0, 4);
  const bigProduct = products[4];

  return (
    <section className="my-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      
      {/* Left side: 2x2 grid, half width */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
        {gridProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 bg-white">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-orange-500 font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side: big single image, half width */}
      <div className="w-full lg:w-1/2 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition">
        <img
          src={bigProduct.thumbnail}
          alt={bigProduct.title}
          className="w-full h-[450px] object-cover"
        />
        <div className="p-6 bg-white">
          <h2 className="text-3xl font-bold mb-2">{bigProduct.title}</h2>
          <p className="text-orange-500 font-bold text-xl">${bigProduct.price}</p>
        </div>
      </div>

    </section>
  );
}