import React, { useState } from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Login from "./Login";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const FormErrorMessage = ({ children }) => {
  return <p className="passVal">*{children}</p>;
};

const SignUp = () => {
  // STATE MANAGEMENT TO DISPLAY LOGIN
  const [display, setDisplay] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      alert("Account created successfully");
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
  const btnClick = () => {
    if (formik.isValid) {
      formik.resetForm();
    } else {
      return formik.errors;
    }
  };

  return (
    <div>
      {display ? (
        <motion.section>
          <AnimatePresence mode={"wait"}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
                btnClick();
              }}
            >
              {/* Form header */}
              <div className="formHeader">
                <motion.h1
                 initial={{ y: "200%" }}
                 animate={{ y: "0%" }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 1, delay: 0.5 }}
                >Sign Up</motion.h1>
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >Log in with the data provided during your registeration</motion.p>
              </div>

              {/* input field */}
              <article className="inputField">
                <div className="email">
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
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
                    placeholder="type your password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  ) : null}
                </div>

                <div className="c_Password">
                  <p>Confirm password</p>
                  <input
                    type="password"
                    name="confirm"
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
                  <p>Remember me</p>
                </div>
                <div className="forgot">
                  <p>Forgot password?</p>
                </div>
              </article>

              <article className="btnCont">
                <button
                  className="signIn"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Sign Up
                </button>

                <div className="logIn">
                  {" "}
                  <Link to="/" className="link">
                    {" "}
                    Log In
                  </Link>{" "}
                </div>
              </article>
            </motion.form>
          </AnimatePresence>
        </motion.section>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default SignUp;
