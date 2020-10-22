import React from 'react';

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