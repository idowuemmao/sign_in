import React from "react";
import welcome from "../images/welcome.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mb-16">
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="w-3/5 max-w-2xl"
      >
        <img src={welcome} alt="welcome" className="w-full object-contain" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="3000"
        className=" w-9/12 flex gap-4"
      >
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
AOS.init();
