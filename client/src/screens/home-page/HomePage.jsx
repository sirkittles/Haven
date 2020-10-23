import React from "react";
import Layout from "../../components/shared/layout/Layout";
import PostWall from "../../components/postwall/PostWall";

const HomePage = (props) => {
  const { currentUser, handleLogout, posts } = props;

  return (
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <h2>This is the homepage</h2>
      <div className="main-wall">
        <PostWall
          currentUser={currentUser}
          posts={posts}
        />
      </div>
    </Layout>
  )
}

export default HomePage;