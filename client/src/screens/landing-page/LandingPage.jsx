import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div>
        <h1>Welcome!</h1>
        <h4>Show off your room</h4>
        <Link to="/register-account">
          <button>Join Us</button>
        </Link>
      </div>
      <div>
        <p>Already have an account?</p><Link to='/login'>Sign in</Link>
      </div>
    </div>
  );
};

export default LandingPage;
