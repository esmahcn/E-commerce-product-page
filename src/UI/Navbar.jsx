import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Navbar({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm z-50 relative">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Left: Menu icon (mobile), logo, links */}
        <div className="flex items-center gap-4">
          {/* Burger menu (mobile only) */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <img src="/images/icon-menu.svg" alt="Menu" className="w-5 h-5" />
          </button>

          {/* Logo */}
          <img src="/images/logo.svg" alt="Logo" className="h-6" />

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-8 text-sm text-gray-500 ml-10">

            <a href="/Shop" className="hover:text-black cursor-pointer">Shop</a>
            <a href="/Home" className="hover:text-black cursor-pointer">Home</a>
            <a href="/AboutUs" className="hover:text-black cursor-pointer">AboutUs</a>
            <a href="/Blog" className="hover:text-black cursor-pointer">Blog</a>
            <a href="/Contact" className="hover:text-black cursor-pointer">Contact</a>
          </ul>
        </div>

        {/* Right: Cart + Avatar */}
        <div className="relative flex items-center space-x-6"



        >
          {/* Cart icon with count */}
          <div className="relative cursor-pointer" onClick={onCartClick}>
            <img src="/images/icon-cart.svg" alt="Cart" className="w-5 h-5 hover:opacity-75" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </div>

          {/* Avatar */}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      {isMenuOpen && (
        <>
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 p-6 shadow-lg">
            <button className="mb-8" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/icon-close.svg" alt="Close" className="w-4 h-4" />
            </button>
            <ul className="flex flex-col space-y-4 text-gray-700 text-lg font-medium">
              <li>
                <a href="/Shop" className="hover:text-black transition-colors duration-200">Shop</a>
              </li>
              <li>
                <a href="/Home" className="hover:text-black transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/AboutUs" className="hover:text-black transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="/Blog" className="hover:text-black transition-colors duration-200">Blog</a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-black transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        </>
      )}
    </nav>
  );
}

export default Navbar;