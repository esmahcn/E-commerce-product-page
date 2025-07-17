import React from "react";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import { Outlet } from "react-router-dom";



function Layout() {
  return (
    <>
      <Navbar cartCount={0} onCartClick={() => console.log("Cart clicked")} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;