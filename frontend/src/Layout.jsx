import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="border w-screen h-screen flex flex-col items-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
