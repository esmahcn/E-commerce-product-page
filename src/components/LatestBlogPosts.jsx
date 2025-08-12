import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function LatestBlogPosts() {
  return (
    <section className="max-w-7xl mx-auto my-16 px-6 bg-gray-100 rounded-3xl py-10">
      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Left side */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold">Latest Blog Posts</h2>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px]">
            <img
              src="/images/prem.jpg"
              alt="Main Blog"
              className="row-span-2 rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <img
              src="/images/trend.jpg"
              alt="Blog Side 1"
              className="rounded-2xl shadow-md object-cover w-full h-full"
            />
            <img
              src="/images/sneaker2.jpg"
              alt="Blog Side 2"
              className="rounded-2xl shadow-md object-cover w-full h-full"
            />
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <button
              aria-label="Previous"
              className="bg-orange-500 text-white p-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              aria-label="Next"
              className="bg-orange-500 text-white p-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Vertical line separator */}
        <div className="hidden md:block w-[2px] bg-gray-300 rounded mx-4" style={{ height: "100px" }}></div>

        {/* Right side */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <p className="text-gray-700 text-lg leading-relaxed max-w-md">
            Step into style with our latest shoe arrivals! Explore trendy sneakers, elegant heels, and comfortable boots. Find your perfect pair and walk confidently with our curated collection.
          </p>

          {/* Titles with gray background line below */}
        <div className="flex flex-col gap-6 max-w-md">
  {["Nike Air Max", "Adidas Superstar", "Jordan Retro"].map((title) => (
    <div key={title} className="relative group cursor-pointer">
      <h3 className="text-xl font-semibold hover:text-orange-500 transition">
        {title}
      </h3>
      <div className="absolute left-0 bottom-0 w-full h-2 bg-gray-300 rounded mt-1"></div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}