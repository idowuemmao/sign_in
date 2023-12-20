import Input from "./input";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginValidationSchema = Yup?.object()?.shape({
  email: Yup?.string()?.email()?.required("Email is required"),
  password: Yup?.string()?.required("Password is required"),
});

export default function SignIn() {
  const navigate = useNavigate();
  const loginFormik = useFormik({
    validationSchema: loginValidationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    },
  });
  return (
    <div className="relative mt-10 grid w-full place-items-center gap-8 font-serif">
      <h2 className=" text-4xl font-bold">Kindly Log in</h2>
      <form className="loginForm" onSubmit={loginFormik?.handleSubmit}>
        <Input
          name="email"
          type="text"
          placeholder=""
          label="Email*"
          onChange={loginFormik?.handleChange}
          error={loginFormik?.submitCount > 0 && loginFormik.errors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder=""
          value={loginFormik?.password}
          label="Password*"
          onChange={loginFormik?.handleChange}
          error={loginFormik?.submitCount > 0 && loginFormik.errors.password}
        />
        <button type="submit" className="loginButton">
          Log in
        </button>
      </form>
    </div>
  );
}
