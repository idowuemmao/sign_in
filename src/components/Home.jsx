import React from "react";

const Home = () => {
  return (
    <div>
      Welcome On Board
      <div>
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
