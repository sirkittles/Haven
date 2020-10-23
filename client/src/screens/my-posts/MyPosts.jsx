import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPostsOneUser } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";
import Post from "../../components/post/Post";

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

  console.log(allUserPosts)

  const myPostsJSX = allUserPosts && allUserPosts.map(mypost => (
    <Post
      key={mypost.id}
      imgURL={mypost.img_url}
      content={mypost.content}
      userId={mypost.user_id}
    />
  ))

  return (
    <Layout currentUser={currentUser} >
      <div className="my-posts-container">
        <div className="my-posts">
          {myPostsJSX}
        </div>
      </div>
    </Layout>
  );
};

export default MyPosts;
