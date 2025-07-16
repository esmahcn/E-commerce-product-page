import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/adidas-5400466_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative text-white text-5xl font-extrabold tracking-wide z-10">
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left Sidebar */}
          <div className="md:w-1/3 text-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <p className="mb-6 text-gray-600">
             Contact us for assistance or questions. we're here to help with any inquieries you have.
            </p>
              <p className="mb-2 font-semibold">Adress: Silver Business Pont USA</p>
            <p className="mb-2 font-semibold">Email: sneakers@gmail.com</p>
            <p className="mb-6 font-semibold">Phone: +1 (231) 234 3444</p>
             <p className="mb-6 font-semibold">Opening Hours: We are open monday saturday (IOM-SPM) and closed on sunday</p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 text-gray-700 text-xl">
              <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
              <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Send a Message</h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Name..."
                />
              </div>

              {/* Email & Phone */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Email..."
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Phone..."
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Address..."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition shadow"
              >
                Send
              </button>
            </form>
            {/* Map Section */}
<div className="max-w-6xl mx-auto px-4 mt-16">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Find Us on the Map</h2>
  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
    <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;