import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../images/logo.png";
const Layout = () => {
  return (
    <div className="relative w-full h-full grid grid-flow-row">
      <header className="bg-yellow-500 w-full p-2 px-6 font-bold text-black flex items-center justify-between sticky top-0 z-20">
        <img src={logo} alt="logo" className="w-12" />
        <p>Welcome Onboard</p>
      </header>
      <div className="min-h-full ">
        <Outlet />
      </div>
      <footer className="bg-yellow-500 w-full p-2 text-black text-center font-bold text-sm sticky bottom-0 z-20">
        &#169; 2023 IDOWU EMMANUEL{" "}
        <span className="text-[0.5rem] italic">Frontend Developer</span>
      </footer>
    </div>
  );
};

export default Layout;
