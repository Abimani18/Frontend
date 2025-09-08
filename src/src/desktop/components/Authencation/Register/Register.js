import React, { useState } from "react";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import pic2 from "./googlelogo.png";
import pic3 from "./Facebooklogo.webp";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="card-Reg">
        <div className="vertical-Reg">Secured by Imaggar</div>

        <div className="title-Reg">
          <h2>Create your account</h2>
        </div>
        <div className="continue-Reg">
          <p>to continue with Imaggar</p>
        </div>
        <div>
          <div className="social-icons-Reg">
            <img
              src={pic2}
              alt="Google Logo"
              className="img-logo-Reg"
              key="google"
            />
            <h5>Continue with GitHub</h5>
          </div>
          <div className="social-icons-Reg">
            <img
              src={pic3}
              alt="Facebook Logo"
              className="img-logo-Reg"
              key="facebook"
            />
            <h5>Continue with facebook</h5>
          </div>
        </div>
        <div className="off-reg">
          <div className="line-code-Reg"></div>
          <div className="or-code-Reg"> or </div>
          <div className="line-code-Reg"></div>
        </div>
        <div className="fl-reg">
          <div>
            <div>
              <h5>First Name</h5>
            </div>
            <div className="input-Reg">
              <input
                type="text"
                className="input-Regis"
                placeholder="Enter your first name"
              />
            </div>
          </div>

          <div>
            <div>
              <h5>Last Name</h5>
            </div>
            <div className="input-Reg">
              <input
                type="text"
                className="input-Regis"
                placeholder="Enter your last name"
              />
            </div>
          </div>
        </div>

        <div>
          <h5>Email Address</h5>
        </div>
        <div className="input-Reg">
          <input
            type="text"
            className="input-box-Reg"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <h5>Password</h5>
        </div>
        <div className="input-Reg">
          <input
            type={showPassword ? "text" : "password"}
            className="input-box-Reg"
            placeholder="Enter your password"
          />
          <button
            className="password-toggle-Reg"
            onClick={togglePasswordVisibility}>
            <FontAwesomeIcon
              className="svg-reg"
              icon={showPassword ? faEye : faEyeSlash}
            />
          </button>
        </div>

        <div className="continue-button">
          <button className="button-Reg">CONTINUE</button>
        </div>
      </div>
    </>
  );
}
