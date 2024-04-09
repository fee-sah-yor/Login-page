import React, { useEffect } from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const FormErrorMessage = ({ children }) => {
  return <p className="passVal">*{children}</p>;
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "password must be above 8 characters")
        .required("Required"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
  });

  // useEffect(() => {
  //  if (formik.errors) {
  //   console.log("errors");
  // }
  // },[formik.errors]);

  return (
    <div>
      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          {/* Form header */}

          <div className="formHeader">
            <h1>Sign Up</h1>
            <p>Log in with the data provided during your registeration</p>
          </div>

          {/* input field */}
          <article className="inputField">
            <div className="email">
              <p>Email</p>
              <input
                type="email"
                name="email"
                required
                placeholder="your email address"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              ) : null}
            </div>
            <div className="password">
              <p>Password</p>
              <input
                type="Password"
                name="password"
                required
                placeholder="type your password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              ) : null}
            </div>

            <div className="c_Password">
              <p>Confirm password</p>
              <input
                type="password"
                name="confirm"
                required
                placeholder="re-enter your password"
                {...formik.getFieldProps("confirm")}
              />
              {formik.touched.confirm && formik.errors.confirm ? (
                <FormErrorMessage>{formik.errors.confirm}</FormErrorMessage>
              ) : null}
            </div>
          </article>

          <article className="helpLinks">
            <div className="remember">
              <input className="checkBox" type="checkbox" />
              <p>Remember me?</p>
            </div>
            <div className="forgot">
              <p>Forgot password?</p>
            </div>
          </article>

          <article className="btnCont">
            <button className="signIn" type="submit">
              Sign Up
            </button>

            <button className="logIn" disabled={!formik.handleSubmit}>
              Log In
              <Link
                type="submit"
                id="login"
                to="/login"
                className="logIn"
              ></Link>
            </button>
          </article>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
