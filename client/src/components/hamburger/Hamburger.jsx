import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";

const Hamburger = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser, handleLogout } = props;
  // const { id } = currentUser;

  const changeMenuOpen = (e) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {currentUser ? (
        <div className="menu-container">
          <div className="menu-links">
            <img
              src={`${process.env.PUBLIC_URL}/assets/hamburger.svg`}
              alt="hamburger-icon"
              className="hamburger-icon"
              onClick={(e) => changeMenuOpen(e)}
            />
          </div>
          <div className="dropdown">
            <div
              className={
                openMenu
                  ? "hamburger-menu-links-visible menu-link header-menu"
                  : "hamburger-menu-links-hidden"
              }
            >
              <Link className="menu-link" to="/create-post">
                Make a Post
              </Link>
              <Link
                className="menu-link"
                to={`/users/${props.currentUser.id}/posts`}
              >
                My Posts
              </Link>
              <Link
                className="logout-link"
                to="/"
                onClick={() => handleLogout()}
              >
                logout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>''</>
      )}
    </>
  );
};

export default Hamburger;
