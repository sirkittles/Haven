import React from "react";

const Post = (props) => {
  const { imgURL, content, userId } = props;
  return (
    <div>
      <img src={imgURL} />
    </div>
  )
}

export default Post;