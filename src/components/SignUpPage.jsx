import React from "react";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();
  const user = location?.state?.user;
  return (
    <div className="grid place-items-center h-full">
      <h2 className="text-lg md:text-3xl">Welcome to the Home page</h2>
      {user && (
        <div className="border-2 text-center p-4 bg-yellow-500 rounded-xl text-lg md:text-3xl">
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
      <button className="loginButton">
        <a href="/">Sign Out</a>
      </button>
    </div>
  );
};

export default SignUpPage;
