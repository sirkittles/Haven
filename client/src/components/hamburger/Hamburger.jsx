import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";

const Hamburger = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = props;

  const changeMenuOpen = (e) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      {
        currentUser ?
        <div>
          <div className="menu-links">
            <img
              src={`${process.env.PUBLIC_URL}/assets/hamburger.svg`}
              alt="hamburger-icon"
              onClick={(e) => changeMenuOpen(e)}
            />
          </div>
          <div className={openMenu ? "hamburger-menu-links-visible" : "hamburger-menu-links-hidden"}>
              <Link className="menu-link" to="/create-post">Make a Post</Link>
              <Link className="menu-link" to="/users/:id/posts">My Posts</Link>
          </div>
        </div>
        :
        <>
          ''
        </>
      }
    </div>
  );
};

export default Hamburger;
