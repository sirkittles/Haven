import React from "react";
// import { Match } from "react-location";
import { useLocation } from "react-router-dom";

const Post = (props) => {
  const { imgURL, content, userId } = props;
  const location = useLocation();
  console.log(location.pathname);
  console.log(userId)

  return (
    <div>
      <img src={imgURL} />
      <div>{content}</div>
      {
        (location.pathname === `/users/${userId}/posts`) ?
          <div className="edit-delete-buttons-container">
            <button>Edit</button>
            <button>Delete</button>
          </div>
          :
          null
      }
    </div>
  )
}

export default Post;