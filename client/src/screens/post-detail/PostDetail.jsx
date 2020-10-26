import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOnePost } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";

const PostDetail = (props) => {
  const { currentUser, handleLogout, onePost, setOnePost } = props;
  const { id } = useParams();
  // const [onePost, setOnePost] = useState([]);

  // useEffect(() => {
  //   const fetch = async () => await fetchOnePost(id);
  //   fetch();
  // }, [onePost]);

  // const fetchOnePost = async (id) => {
  //   const resp = await getOnePost(id);
  //   setOnePost(resp);
  // };
  console.log(onePost);

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      {onePost && (
        <>
          <div className="floater"></div>
          <div className="post-detail">
            {currentUser ? (
              <div className="post-detail-container">
                <p>{onePost.user.username}</p>
                <img src={onePost.img_url} alt={onePost.id} />
              </div>
            ) : (
              <span>
                Please <Link to="/login">login</Link> to view
              </span>
            )}
          </div>
        </>
      )}
    </Layout>
  );
};

export default PostDetail;
