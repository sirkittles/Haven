import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/layout/Layout";
import PostWall from "../../components/postwall/PostWall";
import { getAllPosts } from "../../services/posts";

const HomePage = (props) => {
  const [posts, setPosts] = useState();
  const { currentUser, handleLogout } = props;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const resp = await getAllPosts();
    setPosts(resp);
  };

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