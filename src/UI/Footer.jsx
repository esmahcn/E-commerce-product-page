import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-4 relative m-0">
      {/* Vertical borders on left and right */}
      <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-700"></div>
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-700"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-700 pt-8 m-0">
        {/* Left column */}
        <div className="border-b border-gray-700 pb-6 md:border-b-0 md:pr-10 md:border-r md:border-gray-700">
          <h2 className="text-3xl font-extrabold mb-6 text-white">
            ARE YOU INTERESTED?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover the best sneakers from top brands. Walk with comfort and style.
          </p>
        </div>

        {/* Right column */}
        <div className="pt-6 md:pt-0 md:pl-10">
          <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
          <div className="flex space-x-6 text-orange-500 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-orange-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center text-gray-500 text-sm py-2 mt-8 m-0">
        &copy; {new Date().getFullYear()} Sneaker shoes sales. All rights reserved.
      </div>
    </footer>
  );
}