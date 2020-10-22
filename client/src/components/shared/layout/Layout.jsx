import React from 'react';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;