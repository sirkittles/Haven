import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/layout/Layout";

const MyPosts = (props) => {
  const { currentUser, fetchAllUserPosts, allUserPosts } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchAllUserPosts(id);
  }, []);

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
