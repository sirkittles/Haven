import React from "react";
// import { Match } from "react-location";
import { useLocation } from "react-router-dom";
import "./Post.css"

const Post = (props) => {
  const { postId, imgURL, content, userId, deleteUserPost, isDeleted, comments } = props;
  const location = useLocation();
  // const history = useHistory();
  // useEffect(() => {
  //   deleteUserPost();
  // }, [isDeleted])
    const comment = comments.map(comment => (comment.content))

  console.log(comments);
  return (
    <div className="post-container">
      <img className="post-image" src={imgURL} alt={`${userId}'s post`} />
      <div>{content}</div>
      {
        (location.pathname === '/homepage') ?
          <div>{comment}</div>
          :
          ""
      }
      {
        (location.pathname === `/users/${userId}/posts`) ?
          <div className="edit-delete-buttons-container">
            <button>Edit</button>
            <button
              className="delete-button"
              onClick={() => {
                deleteUserPost(postId);
                // isDeleted ? history.push(`/user/${userId}/posts`) : ""
              }}
            >Delete</button>
          </div>
          :
          null
      }
    </div>
  )
}

export default Post;