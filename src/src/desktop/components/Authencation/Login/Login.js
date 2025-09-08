import React from "react";
import "./Login.css";
import pic1 from "./logoMobile.png";
import pic2 from "./googlelogo.png";
import { loginWithGoogle } from "../../../../../axios/services/api";

const handleGoogleLogin = async () => {
  try {
    const response = await loginWithGoogle(); // Call the subscribe function from the API service
    console.log(response.message); // Assuming the response contains a message property
  } catch (error) {
    console.error('Error subscribing:', error);
    console.log(error); // 
  }
};

export default function Login() {
  return (
    <>
    <div className="signin-spaceup">
      <div className="card-signin">
        {" "}
        <div className="  vertical-signin">Secured by Imaggar</div>
        <div className="sameline-signin">
          <img src={pic1} alt="Imaggar Logo" className="logo-signin" />
          <h3>Imaggar</h3>
        </div>
        <div className="title-signin">
          <h2>Sign in</h2>
        </div>
        <div className="continue-signin">
          <p>to continue with Imaggar</p>
        </div>
        <div className="social-icons-signin">
         
          <img
              src={pic2}
              alt="Google Logo"
              className="img-logo-signin"
              key="google"
            />
         
            <h5>Continue with GitHub</h5>
          </div>
          <div className="off-reg">
          <div className="line-code-Reg"></div>
          <div className="or-code-Reg"> or </div>
          <div className="line-code-Reg"></div>
        </div>
        <div>
          <h5>Email Address</h5>
        </div>
        <div className="input-signin">
          <input
            type="text"
            className="input-box-signin"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <button className="button-signin"  onClick={handleGoogleLogin}>CONTINUE</button>
        </div>
        <div className="no-acc-signin">
          <div>
            <div className="oneline-signin">
              {" "}
              <h5 href="#">No account?</h5>
              <h5 className="blue-signin">Sign up</h5>
            </div>
          </div>
          <div className="help-signin">
            <div>
              <h5 href="#">Help</h5>
            </div>
            <div>
              {" "}
              <h5 href="#">Privacy</h5>
            </div>
            <div>
              <h5 href="#">Teams</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
