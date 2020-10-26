import React, { useState, useEffect } from "react";
// import { Match } from "react-location";
import { useLocation, Link, useHistory } from "react-router-dom";
import "./Post.css";
import { getOnePost } from "../../services/posts";
import PostDetail from "../../screens/post-detail/PostDetail";

const Post = (props) => {
  const {
    postId,
    imgURL,
    content,
    userId,
    deleteUserPost,
    isDeleted,
    username,
    comments,
    handleUpdatePost
  } = props;

  const location = useLocation();
  const [editPost, setEditPost] = useState({
    img_url: imgURL,
    content: content
  });
  const [toggleEditForm, setToggleEditForm] = useState(false);
  const [toggleViewComments, setToggleViewComments] = useState(false);
  const [onePost, setOnePost] = useState([]);
  const history = useHistory();
  // useEffect(() => {
  //   deleteUserPost();
  // }, [isDeleted])
  // comments ?
  const comment = comments.map(comment => (comment.content))
  console.log(toggleEditForm);
  console.log(comments);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditPost({
      ...editPost,
      [name]: value
    })
  }

  useEffect(() => {
    const fetch = async () => await fetchOnePost(postId);
    fetch();
  }, [postId]);

  const fetchOnePost = async (postId) => {
    const resp = await getOnePost(postId);
    setOnePost(resp);
  };

  return (
    <div className="post-container">
      <div>{username}</div>
      <Link to={`/posts/${postId}`}>
        <img className="post-image" src={imgURL} alt={`${userId}'s post`} onClick={() => <PostDetail onePost={onePost} setOnePost={setOnePost} />} />
      </Link>
      <div>{content}</div>
      {location.pathname === "/homepage" && comments !== undefined && comments.length > 0 ? (
        <button onClick={() => setToggleViewComments(!toggleViewComments)}>
          View Comments
        </button>
      ) : (
        ""
      )}
      {toggleViewComments && (
        <div className="comments-container">
          {comment}
        </div>
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
                // isDeleted ? history.push(`/user/${userId}/posts`) : ""
              }}
            >
              Delete
            </button>
          </div>
          <div className="edit-form-container">
            {toggleEditForm && (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleUpdatePost(postId, editPost)
                }}
              >
                <label>
                  <input
                    type='text'
                    name='img_url'
                    value={editPost.img_url}
                    onChange={(e) => handleEditChange(e)}
                  />
                </label>
                <label>
                  <input
                    type='text'
                    name='content'
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
