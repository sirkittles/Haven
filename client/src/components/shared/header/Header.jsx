import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../hamburger/Hamburger";

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