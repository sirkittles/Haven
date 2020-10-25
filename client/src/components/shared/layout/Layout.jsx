import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;