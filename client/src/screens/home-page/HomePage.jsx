import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/layout/Layout";
import PostWall from "../../components/postwall/PostWall";
import "./HomePage.css"

const HomePage = (props) => {
  const { currentUser, handleLogout, posts, isDeleted, fetchPosts } = props;

  useEffect(() => {
    fetchPosts();
  }, [isDeleted]);

  return (
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
      <div className="floater"></div>
      <div className="main-wall">
        {
          !currentUser ?
            <span>Please <Link to="/login">login</Link> to view Posts</span>
            :
            <PostWall
          currentUser={currentUser}
          posts={posts}
        />
        }

      </div>
    </Layout>
  )
}

export default HomePage;