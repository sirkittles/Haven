import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../hamburger/Hamburger";

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <div className="header-logo-container">
        <Link to="/homepage">
          <img
          src={`${process.env.PUBLIC_URL}/assets/logo2.png`}
          alt="header-logo"
          className="header-logo"
          />
        </Link>
      </div>
      {
        currentUser ?
          <>
            {currentUser.username}
            <Hamburger
              currentUser={currentUser}
              handleLogout={handleLogout}
            />
            {/* <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button> */}
          </>
          :
          <Link to='/login'>Login</Link>
      }
    </div>
  )
}

export default Header;