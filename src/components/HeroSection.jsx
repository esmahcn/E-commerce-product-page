import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-14">
        
        {/* النص */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Shoes Collect!
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-md">
            Discover our stylish and comfortable sneakers that elevate your look. Perfect for any occasion, our collection combines quality and design to keep you ahead in the fashion game.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded-full font-semibold text-lg transition"
          >
            Shop Now
          </Link>
        </div>

        {/* صورة الحذاء مع الخلفية */}
        <div className="flex-1 flex justify-center relative">
          {/* الدائرة الخلفية */}
          <div className="absolute w-72 h-72 md:w-96 md:h-116 bg-orange-100 rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
          
          {/* دائرة لتقليم الصورة */}
          <div className="rounded-full overflow-hidden w-92 h-92 md:w-116 md:h-96 drop-shadow-xl">
            <img
              src="/images/adidas-5400466_1280.jpg"
              alt="Hero Sneaker"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;