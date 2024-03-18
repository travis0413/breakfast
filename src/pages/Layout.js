import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ScrollTop from "../component/ScrollTop";

const Layout = () => {
  return (
    <div className="backgroundImage">
      <div className="cover">
        <Navbar />
        <Outlet />
        <ScrollTop />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
