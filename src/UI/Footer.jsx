import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 py-10 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-1000 mb-4">ARE YOU INTERESTED?</h2>
                    <p className="text-sm text-gray-400">
                        Discover the best sneakers from top brands. Walk with comfort and style.
                    </p>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="/aboutus" className="hover:text-orange-500">Shop</a></li>
                        <li><a href="#" className="hover:text-orange-500">About</a></li>
                        <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                        <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                    </ul>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Copyright Sneaker shoes sales 2024-All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;