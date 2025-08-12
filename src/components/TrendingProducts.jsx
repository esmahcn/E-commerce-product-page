import React, { useRef } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaStar, FaHeart } from "react-icons/fa";

export default function TrendingProducts({ products, onSelect }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trending Products</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 no-scrollbar"
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect(product)}
            className="relative min-w-[220px] bg-white shadow rounded-lg overflow-hidden hover:shadow-lg cursor-pointer transition"
          >
            {/* Heart icon top-right */}
            <button
              className="absolute top-2 right-2 flex items-center justify-center bg-white text-red-500 rounded-full p-1 shadow hover:bg-red-50 transition z-10"
              onClick={e => {
                e.stopPropagation();
                // favorite logic placeholder
                alert(`Favorited: ${product.title}`);
              }}
              aria-label="Add to favorites"
            >
              <FaHeart size={16} />
            </button>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                {/* Star + reviews */}
                <p className="flex items-center text-sm text-gray-500 space-x-1">
                  <FaStar className="text-yellow-400" />
                  <span>({product.rating} Reviews)</span>
                </p>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
              <MdOutlineShoppingCart className="text-xl text-gray-700 hover:text-gray-900 transition" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}