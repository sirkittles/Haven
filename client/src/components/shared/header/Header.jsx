import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo2.png`}
        alt="header-logo"
        className="header-logo"
      />
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login</Link>
      }
    </div>
  )
}

export default Header;