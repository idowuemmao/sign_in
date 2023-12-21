import React from "react";
import welcome from "../images/welcome.jpg";
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <img src={welcome} alt="welcome" className="w-4/5" />
      <div className=" w-9/12 flex gap-4">
        <a href="/sign-in" className="loginButton">
          Log in
        </a>
        <a href="/sign-up" className="loginButton">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
