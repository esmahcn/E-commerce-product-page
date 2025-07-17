import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
// Fix marker icon for Leaflet (vite/react)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

function Contact() {
  return (
    <section className="m-0 p-0">
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

     <section className="bg-white py-16 px-4 m-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="md:w-1/3 text-left space-y-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          <p className="mb-6 text-gray-600">
            Have questions? Reach out to us anytime, we’re here to help you.
          </p>

          {/* Email */}
          <div>
            <h4 className="flex items-center text-gray-700 font-semibold mb-1 text-lg">
              <FaEnvelope className="text-orange-500 mr-2" />
              Email
            </h4>
            <p className="text-gray-500 ml-7">support@sneakerstore.com</p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="flex items-center text-gray-700 font-semibold mb-1 text-lg">
              <FaPhone className="text-orange-500 mr-2" />
              Phone
            </h4>
            <p className="text-gray-500 ml-7">+1 234 567 8900</p>
          </div>

          {/* Address */}
          <div>
            <h4 className="flex items-center text-gray-700 font-semibold mb-1 text-lg">
              <FaMapMarkerAlt className="text-orange-500 mr-2" />
              Address
            </h4>
            <p className="text-gray-500 ml-7">123 Sneaker Street, Shoe City, Country</p>
          </div>

          {/* Follow Us */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Follow Us</h3>
          <div className="flex space-x-4 text-gray-700 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-orange-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

          {/* Right Column */}
          <div className="md:w-2/3 flex flex-col gap-8">
            <div className="bg-gray-50 p-10 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center md:text-left">
                Send a Message
              </h2>

              <form className="space-y-6 text-left max-w-xl mx-auto md:mx-0">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your name"
                  />
                </div>

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
                      placeholder="Your email"
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
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition shadow"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-[400px] m-0 p-0">
        <MapContainer
          center={[36.75, 3.06]}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full m-0 p-0"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[36.75, 3.06]}>
            <Popup>We are here! <br /> Algiers, Algeria</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default Contact;