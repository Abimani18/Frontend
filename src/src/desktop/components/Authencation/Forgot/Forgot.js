import React from "react";
import "./Forgot.css";
import ink1 from "./image.png";
import ink2 from "./googlelogo.png";

export default function Forget() {
  return (
    <>
      <div className="Card-forgot">
        <div className="box-forgot">
        <div className="title-forgot">Login your udemy account</div>
        <div>
          <div className="icon-forgot">
            <img src={ink1} className="img-icon-forgot" alt="" />
          </div>
          <div className="welcomeforgot">Welcome back, Geetha</div>
        </div>
        <div className="social-icons-forgot">
          <img
            src={ink2}
            alt="Google Logo"
            className="img-logo-forgot"
            key="google"
          />
          <h5>Continue with google</h5>
        </div>
        <div>
          <a href="forgot_password.html">Forgot Password?</a>
          <hr />
          <a href="login.html">Log in to a Different Account</a>
          <a href="signup.html">Don't have an account? Sign up</a>
          <a href="organization_login.html">Log in with Your Organization</a>
        </div>
        </div>
      </div>
    </>
  );
}
