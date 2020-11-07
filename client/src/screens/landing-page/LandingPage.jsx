import React from "react";
import { Link } from "react-router-dom";
// import Header from "../../components/shared/header/Header";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      {/* <div className="landing-header">
        <Header />
      </div> */}
      <div className="landing-content-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt="main-logo"
          className="main-logo"
        />
        <h4>Show off your room</h4>
        <Link to="/register-account">
          <button className="join-button">Join Us</button>
        </Link>
        <div className="sign-in-link-container">
          <span>Already have an account? </span>
          <Link className="login-link" to="/login">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
