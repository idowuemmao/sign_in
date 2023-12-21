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
        navigate("/home", { state: { user: values } });
      }, 1000);
    },
  });
  return (
    <div className="mt-10 flex flex-col w-full items-center justify-center gap-8 font-serif">
      <h2 className="text-2xl md:text-4xl font-bold">Kindly Log in</h2>
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
      <p className="mt-2 w-full text-center text-sm md:text-lg">
        Don't have an account?{" "}
        <a href="/sign-up" className="text-yellow-500 ">
          Sign Up
        </a>
      </p>
    </div>
  );
}
