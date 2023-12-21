import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const Layout = () => {
  const location = useLocation();
  const user = location?.state?.user;
  return (
    <div className="relative w-full min-h-full h-fit">
      <div className="sticky top-0 z-20">
        <header className="bg-yellow-500 w-full p-2 px-6 font-bold text-black flex items-center justify-between ">
          <a href="/">
            {user && (
              <img
                src={user.profileImage}
                alt="logo"
                className="w-12 rounded-full"
              />
            )}
          </a>
          <p>Welcome Onboard {user && <span>{user.firstName}</span>}</p>
        </header>
      </div>
      <div className="min-h-screen h-full flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="sticky bottom-0 z-20">
        <footer className="bg-yellow-500 w-full p-2 text-black text-center font-bold text-sm ">
          &#169; 2023 IDOWU EMMANUEL{" "}
          <span className="text-[0.5rem] italic">Frontend Developer</span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
