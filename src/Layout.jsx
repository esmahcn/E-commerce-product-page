import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

function Layout() {
  return (
    <>
      {/* Navbar visible on all pages */}
      <Navbar cartCount={0} onCartClick={() => console.log("Cart clicked")} />

      {/* Main content (based on route) */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default Layout;