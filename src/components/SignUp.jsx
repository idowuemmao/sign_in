import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./input";
import { useNavigate } from "react-router-dom";

const signUpValidationSchema = Yup?.object()?.shape({
  firstName: Yup?.string()?.required("First Name is required"),
  lastName: Yup?.string()?.required("Last Name is required"),
  email: Yup?.string()
    ?.email("Invalid email address")
    ?.required("Email is required"),
  password: Yup?.string()?.required("Password is required"),
  confirmPassword: Yup?.string()
    .oneOf([Yup.ref("password"), null], "Password does not match")
    .required("Confirmed Password is required"),
  profileImage: Yup?.mixed()?.required("Profile Image is required"),
});

export default function SignUp() {
  const navigate = useNavigate();
  const signUpFormik = useFormik({
    validationSchema: signUpValidationSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
    },
    onSubmit: async (values) => {
      setTimeout(() => {
        navigate("/welcome", { state: { user: values } });
      }, 1000);
    },
  });

  return (
    <div className="my-10 grid w-full place-items-center gap-4 font-serif">
      <h2 className=" text-2xl font-bold">Kindly Sign Up</h2>
      <form className="loginForm" onSubmit={signUpFormik?.handleSubmit}>
        <h3 className="text-yellow-500 pb-2 font-semibold">
          Personal Information
        </h3>
        <Input
          name="profileImage"
          accept="image/*"
          type="file"
          onChange={(event) => {
            signUpFormik.setFieldValue(
              "profileImage",
              event.currentTarget.files[0]
            );
          }}
          onBlur={signUpFormik?.handleBlur}
          error={
            signUpFormik?.submitCount > 0 && signUpFormik?.errors.profileImage
          }
        />
        <Input
          name="firstName"
          type="text"
          placeholder=""
          value={signUpFormik?.values.firstName}
          label="First Name"
          onChange={signUpFormik?.handleChange}
          error={
            signUpFormik?.touched.firstName && signUpFormik.errors.firstName
          }
        />
        <Input
          name="lastName"
          type="text"
          placeholder=""
          value={signUpFormik?.values.lastName}
          label="Last Name"
          onChange={signUpFormik?.handleChange}
          error={signUpFormik?.touched.lastName && signUpFormik.errors.lastName}
        />
        <Input
          name="email"
          type="text"
          placeholder=""
          label="Email*"
          value={signUpFormik?.email}
          onChange={signUpFormik?.handleChange}
          error={signUpFormik?.touched.email && signUpFormik.errors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder=""
          value={signUpFormik?.password}
          label="Password*"
          onChange={signUpFormik?.handleChange}
          error={signUpFormik?.touched.password && signUpFormik.errors.password}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder=""
          value={signUpFormik?.confirmPassword}
          label="Confirm Password*"
          onChange={signUpFormik?.handleChange}
          error={
            signUpFormik?.touched.confirmPassword &&
            signUpFormik.errors.confirmPassword
          }
        />
        <button className="loginButton" type="submit">
          Sign Up
        </button>
      </form>
      <p className="mt-2 w-full text-center">
        Already have an account?{" "}
        <a href="/sign-in" className="text-yellow-500 ">
          Log in
        </a>
      </p>
    </div>
  );
}
