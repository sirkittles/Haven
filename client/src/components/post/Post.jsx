import React, { useState, useEffect } from "react";
// import { Match } from "react-location";
import { useLocation, useHistory } from "react-router-dom";

const Post = (props) => {
  const { postId, imgURL, content, userId, deleteUserPost, isDeleted } = props;
  const location = useLocation();
  const history = useHistory();
  console.log(location.pathname);
  console.log(userId)
  console.log(isDeleted)
  // useEffect(() => {
  //   deleteUserPost();
  // }, [isDeleted])

  return (
    <div>
      <img src={imgURL} alt={`${userId}'s post`} />
      <div>{content}</div>
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