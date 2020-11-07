import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOnePost } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";
import "./PostDetail.css";

const PostDetail = (props) => {
  const { currentUser, handleLogout } = props;
  const { id } = useParams();
  const [onePost, setOnePost] = useState([]);

  useEffect(() => {
    const fetch = async (id) => {
      const resp = await fetchOnePost(id);
      setOnePost(resp);
    };
    fetch(id);
  }, [id]);

  const fetchOnePost = async (id) => {
    const resp = await getOnePost(id);
    return resp;
  };
  console.log(onePost);
  console.log(onePost.user);
  // const user = onePost.user;
  // const comment = onePost.comments.map(comment => (comment.content))

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      {onePost && (
        <>
          <div className="floater"></div>
          <div className="post-detail">
            {currentUser ? (
              <div className="post-detail-container">
                <p>{onePost.user?.username}</p>
                <img src={onePost.img_url} alt={onePost.id} />
                <p>{onePost.content}</p>
                <h3>Comments:</h3>
                <div>
                  {onePost?.comments === undefined
                    ? "No comments"
                    : onePost.comments.map((comment) => comment.content)}
                </div>
              </div>
            ) : (
              <span>
                Please <Link to="/login">login</Link> to view
              </span>
            )}
          </div>
        </>
      )}
      <div className="floater"></div>
    </Layout>
  );
};

export default PostDetail;
