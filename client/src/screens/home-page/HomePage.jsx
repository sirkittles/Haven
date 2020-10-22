import React from "react";
import Layout from "../../components/shared/layout/Layout";

const HomePage = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <h2>This is the homepage</h2>
    </Layout>
  )
}

export default HomePage;