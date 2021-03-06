import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPostsOneUser } from "../../services/posts";
import Layout from "../../components/shared/layout/Layout";
import Post from "../../components/post/Post";

const MyPosts = (props) => {
  const [allUserPosts, setAllUserPosts] = useState([]);
  // const [isDeleted, setIsDeleted] = useState(false);
  const { currentUser, deletePost, isDeleted, setIsDeleted, handleUpdatePost, putPost, handleLogout } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchAllUserPosts(id);
  }, [id, isDeleted]);

  const fetchAllUserPosts = async (id) => {
    const resp = await getAllPostsOneUser(id);
    setAllUserPosts(resp);
  }

  // useEffect(() => {
  //   fetchAllUserPosts(id);
  // }, [id, isDeleted])

  const deleteUserPost = async (postId) => {
    await deletePost(postId);

    // history.push(`/user/${id}/posts`)
    setIsDeleted(!isDeleted);
    // isDeleted ? history.push(`/user/${id}/posts`) : ""
    // setAllUserPosts(prevState => prevState.filter(post => {
    //   return post.id !== postId
    // }));
  }
  console.log(allUserPosts)

  const myPostsJSX = allUserPosts && allUserPosts.map(mypost => (
    <Post
      key={mypost.id}
      postId={mypost.id}
      imgURL={mypost.img_url}
      content={mypost.content}
      userId={mypost.user_id}
      deleteUserPost={deleteUserPost}
      isDeleted={isDeleted}
      handleUpdatePost={handleUpdatePost}
      putPost={putPost}
      username={mypost.user?.username}
    />
  ))

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <div className="my-posts-container">
        <div className="floater"></div>
        <div className="my-posts">
          {myPostsJSX}
        </div>
      </div>
    </Layout>
  );
};

export default MyPosts;
