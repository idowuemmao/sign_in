import React from "react";
import { useLocation } from "react-router-dom";
import congrats from "../images/congrats.png";
import celebrate from "../images/celebrate.jpg";

const SignUpPage = () => {
  const location = useLocation();
  const user = location?.state?.user;

  return (
    <div className="grid place-items-center h-full">
      <img src={congrats} alt="congratulation" />
      {user && (
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="shadow-lg text-center w-fit items-center flex flex-col p-2 py-4 bg-yellow-500 rounded-xl text-sm md:text-lg "
        >
          <p className="text-xs italic ">
            You Signed up with the details below
          </p>
          <img
            src={URL.createObjectURL(user.profileImage)}
            alt="profile"
            className="w-28 rounded-lg object-contain"
          />
          <p className="p-4">
            User's Fullname:{" "}
            <span className="underline font-serif font-bold">
              {user.firstName} {user.lastName}
            </span>
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

export default SignUpPage;
