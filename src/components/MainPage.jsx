import React from "react";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  const user = location?.state?.user;
  return (
    <div>
      <h2>Welcome to the main page</h2>
      {/* <p>User Email: {user.email}</p>
      <p>User Password: {user.password}</p> */}
    </div>
  );
};

export default MainPage;
