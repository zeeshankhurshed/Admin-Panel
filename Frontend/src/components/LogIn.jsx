import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Oauth from "./Oauth";
import { setUserInfo } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/services/authApi";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, { isLoading }] = useLoginUserMutation();
  const {
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async values => {
      try {
        const user = await userLogin(values).unwrap();
      //   console.log('After login', user,token);
      dispatch(setUserInfo(user));
      navigate('/');
         } catch (error) {
        console.error('Login error:', error);
        // You can set an error state or display an error message to the user.
      }
    }
  });
  return (
    <div className="container text-center ">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4 pt-5">
        <span className=" pr-3 text-white">Login</span>
      </h2>
      <div className="row px-xl-5">
        <div className="col-lg-12 mb-5">
          <div className=" p-30 d-flex justify-content-center">
            <div id="success"></div>
            <form
              name="login"
              onSubmit={handleSubmit}
              id="contactForm"
              noValidate="novalidate"
              className=" p-5 rounded"
              style={{
                width: "30rem",
                height: "22rem",
                backgroundColor: "#311D3F",
              }}
            >
              <div className="control-group">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger">
                  {errors.email && touched.email ? errors.email : null}
                </p>
              </div>
              <div className="control-group">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  id="password"
                  placeholder="password"
                  required="required"
                  data-validation-required-message="Please enter a password"
                />
                <p className="help-block text-danger">
                  {errors.password && touched.password ? errors.password : null}
                </p>
              </div>
              <div>
                <button
                  className="btn btn-primary py-2 px-4 w-100 text-uppercase"
                  type="submit"
                  id="sendMessageButton"
                >
                  Login
                </button>
              </div>
              <Oauth />
              <p className="text-white">
                Dont have an account?{" "}
                <Link className="text-decoration-none" to={"/signup"}>
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
