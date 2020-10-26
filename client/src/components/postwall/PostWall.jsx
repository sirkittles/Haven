import React from "react";
import { Link } from "react-router-dom";
// import { getAllPosts } from "../../services/posts";
import Post from "../post/Post";
import "./PostWall.css"

const PostWall = (props) => {
  // const [posts, setPosts] = useState();
  const { posts, currentUser } = props;
  console.log(posts)
  // console.log(posts[0])
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // const fetchPosts = async () => {
  //   const resp = await getAllPosts();
  //   setPosts(resp);
  // };

  const postsJSX = posts && posts.map(post => (
    <Post
      key={post.id}
      postId={post.id}
      imgURL={post.img_url}
      content={post.content}
      userId={post.user_id}
      post={post}
      username={post.user?.username}
      comments={post.comments}
    />
  ))

  return (
    <>
    <div className="postwall-container">
      {
        currentUser ?
          <div className="posts-container">
            { postsJSX }
          {/* <h3>hi</h3> */}
          </div>

          :
          <>
          <Link to='/login'>Login</Link><span>to view</span>
          </>
      }
      </div>
    </>
  )
}

export default PostWall;