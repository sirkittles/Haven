import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const {
    postId,
    imgURL,
    content,
    userId,
    deleteUserPost,
    username,
    comments,
    handleUpdatePost,
    post,
  } = props;

  const location = useLocation();
  const [editPost, setEditPost] = useState({
    img_url: imgURL,
    content: content,
  });
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [toggleViewComments, setToggleViewComments] = useState(false);
  const history = useHistory();

  const comment = comments?.map((comment) => comment.content);
  console.log(toggleEditForm);
  console.log(comments);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditPost({
      ...editPost,
      [name]: value,
    });
  };
  console.log(username);
  return (
    <div className="post-container">
      <div className="post-top"></div>
      {/* <div className="post-username">{username}</div> */}
      <Link to={`/posts/${postId}`}>
        <div className="post-img-container">
          <img className="post-image" src={imgURL} alt={`${userId}'s post`} />
        </div>
      </Link>
      <div className="post-content">
        <span className="post-username">{username}</span>
        {content}
      </div>
      <div className="comments-buttons-container">
        {location.pathname === "/homepage" &&
        comments !== undefined &&
        comments.length > 0 ? (
          <button
            onClick={() => setToggleViewComments(!toggleViewComments)}
            className="view-comments-button"
          >
            View Comments
          </button>
        ) : (
          ""
        )}
      </div>
      {toggleViewComments && (
        <div className="comments-container">{comment}</div>
      )}
      {location.pathname === `/users/${userId}/posts` ? (
        <>
          <div className="edit-delete-buttons-container">
            <button onClick={() => setToggleEditForm(!toggleEditForm)}>
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => {
                deleteUserPost(postId, editPost);
              }}
            >
              Delete
            </button>
          </div>
          <div className="edit-form-container">
            {toggleEditForm && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdatePost(postId, editPost);
                }}
              >
                <label>
                  <input
                    type="text"
                    name="img_url"
                    value={editPost.img_url}
                    onChange={(e) => handleEditChange(e)}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="content"
                    value={editPost.content}
                    onChange={(e) => handleEditChange(e)}
                  />
                </label>
                <button>Submit</button>
              </form>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Post;
