// Importing style
import "./style.css";
// Importing Libraries
import { Formik, Form } from "formik";
import {Link} from 'react-router-dom'
import { useState } from "react";
import * as Yup from 'yup';
// Importing components
import LoginInput from "../../components/inputs/logininput";

const loginInfos = {
  email: "",
  password: "",
};

const Login = () => {
  
  const [login, setLogin] = useState(loginInfos)
  const {email, password} = login;
  const handleLoginChange = e => {
    const {name, value} = e.target.value;
    setLogin({...login, [name]: value})
  }
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("Must be valid email")
      .max(100),
    password: Yup.string()
      .required("Password is required")
  });
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../../icons/facebook.svg" alt="Facebook" />
            <span>
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik initialValues={{email, password}} validationSchema={loginValidation}>
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      placeholder="Email address or Phone number"
                      onChange={handleLoginChange}
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleLoginChange}
                      bottom
                    />
                    <button type="submit" className="blue_btn">
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot" className="forgot_password">
                Forgotten password
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a Page </b>
              for a celebrity, brand or business
            </Link>
          </div>
        </div>
      </div>
      <div className="signup_wrapper"></div>
    </div>
  );
}

export default Login
