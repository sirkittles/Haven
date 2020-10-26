import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../hamburger/Hamburger";
import "./Header.css";

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="header">
      <div className="header-logo-container">
        <Link to="/homepage">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo2.png`}
            alt="header-logo"
            className="header-logo"
          />
        </Link>
      </div>
      <div className="header-menu">
        {currentUser ? (
          <>
            {/* {currentUser.username} */}
            <Hamburger currentUser={currentUser} handleLogout={handleLogout} />
            {/* <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button> */}
          </>
        ) : (
          <Link to="/login" className="header-login-link">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
