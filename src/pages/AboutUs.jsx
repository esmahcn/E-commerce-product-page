import React from "react";

export default function AboutUs() {
    return (
        <section className="bg-white m-0 p-0">
            {/* Hero Section */}
            <div
                className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <h1 className="relative text-white text-5xl font-extrabold tracking-wide z-10">
                    About Us
                </h1>
            </div>

            {/* Our Story Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
                <img
                    src="/images/nike-5020608_1280.jpg"
                    alt="Our Story"
                    className="w-full md:w-1/2 rounded-xl shadow-md"
                />
                <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Text section */}
                    <div className="md:w-1/2 text-center md:text-left space-y-3">
                        <p className="text-Black-900 uppercase tracking-widest font-semibold text-sm">
                            Our Sneaker Journey
                        </p>
                       
                        <p className="text-gray-600 leading-relaxed">
                            Sneaker story began with a love for sneakers. We've evolved into a Hub for Innovation, style, and community uniting Enthusiasts Globaly with Our Currated Selection and Passion-Driven Approach.
                        </p>

                   <div className="pt-2">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-100">
        Let's Go--
      </button>
    </div>
  </div>
                    {/* Image section */}
                    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
                        <img
                            src="/images/istockphoto-1346094881-1024x1024.jpg"
                            alt="Our Journey"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}