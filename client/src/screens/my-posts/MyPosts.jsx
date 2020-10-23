import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPostsOneUser } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";

const MyPosts = (props) => {
  const [allUserPosts, setAllUserPosts] = useState([]);
  const { currentUser } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchAllUserPosts(id);
  }, [id]);

  const fetchAllUserPosts = async (id) => {
    const resp = await getAllPostsOneUser(id);
    setAllUserPosts(resp);
  }

  console.log(allUserPosts);

  return (
    <Layout currentUser={currentUser} >
      <div className="my-posts-container">
        <div className="my-post">
          <h2>hello</h2>
        </div>
      </div>
    </Layout>
  );
};

export default MyPosts;
