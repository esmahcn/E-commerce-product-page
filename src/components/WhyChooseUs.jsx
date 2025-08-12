import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left big photo */}
        <div className="md:w-1/2">
          <img
            src="/images/cult.jpg"
            alt="Why Choose Us"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>

        {/* Right side: text + two small photos */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          {/* Text on top */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide top quality sneakers with unmatched comfort and style.
              Our commitment to excellence guarantees you the best products and
              customer service.
            </p>
          </div>

          {/* Two stacked mini photos */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/vers.jpg"
              alt="Mini photo 1"
              className="rounded-lg shadow-md w-full h-44 object-cover"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
}
