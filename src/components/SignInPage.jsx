import React from "react";
import { useLocation } from "react-router-dom";
import congrats from "../images/congrats.png";
import celebrate from "../images/celebrate.jpg";

const SignInPage = () => {
  const location = useLocation();
  const user = location?.state?.user;
  return (
    <div className="grid place-items-center h-full">
      <img src={congrats} alt="congratulation" />
      {user && (
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="shadow-lg text-center p-4 bg-yellow-500 rounded-xl text-lg md:text-3xl"
        >
          <p className="text-xs italic ">
            You Logged in with the details below
          </p>
          <p className="p-4">
            User Email:{" "}
            <span className="underline font-serif font-bold">{user.email}</span>
          </p>
          <p className="p-4">
            User Password:{" "}
            <span className="underline font-serif font-bold">
              {user.password}
            </span>
          </p>
        </div>
      )}
      <div
        className="w-full flex items-center"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <button className="loginButton">
          <a href="/">Sign Out</a>
        </button>
      </div>
      <img src={celebrate} alt="celebrate" className="absolute -z-20 left-0" />
    </div>
  );
};

export default SignInPage;
