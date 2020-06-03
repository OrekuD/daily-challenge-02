import React from "react";
import { Cancel, Facebook, GoogleColor, ArrowRight } from "../svg/Svgs";

const LogIn = () => (
  <div className="container">
    <div className="left">
      <div className="inner-container">
        <div className="section-1">
          <h3> Log In </h3>
          <p>
            Log in to your account to upload or download pictures, videos or
            music
          </p>
        </div>
        <div className="section-2">
          <input placeholder="Enter your email address" />
        </div>
        <div className="section-3">
          <p> Forgot password? </p>
          <div>
            <p> Next </p>
            <ArrowRight size="20px" color="#ffffff" />
          </div>
        </div>
        <hr />
        <div className="section-4">
          <div className="section-4-top">
            <p> Or log in with </p>
          </div>
          <div className="section-4-bottom">
            <div className="social-button">
              <Facebook size="30px" /> <p> Facebook </p>
            </div>
            <div className="social-button">
              <GoogleColor size="30px" /> <p> Google </p>
            </div>
          </div>
        </div>
        <div className="section-5">
          <span>
            Don't have an account yet? <a href="/"> Sign up </a>
          </span>
        </div>
      </div>
    </div>
    <div className="right">
      <div>
        <Cancel size="10px" color="#000000" />
      </div>
    </div>
  </div>
);

export default LogIn;
