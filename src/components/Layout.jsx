import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../images/logo.png";
const Layout = () => {
  return (
    <div className="w-full h-screen relative border-2 border-red-500 flex flex-col">
      <header className="bg-yellow-500 w-full p-2 px-6 font-bold text-black flex items-center justify-between">
        <img src={logo} alt="logo" className="w-12" />
        <p>Welcome to this Sign In Page</p>
      </header>
      <Outlet />
      <footer className="bg-yellow-500 w-full p-2 text-black text-center font-bold text-sm absolute bottom-0">
        &#169; 2023 SIGN IN PAGE
      </footer>
    </div>
  );
};

export default Layout;
