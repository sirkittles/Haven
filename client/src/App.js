import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { registerUser, loginUser, removeToken } from "./services/auth";
import LandingPage from "./screens/landing-page/LandingPage";
import RegisterAccount from "./screens/register-account/RegisterAccount";
import LoginPage from "./screens/login-page/LoginPage";
import HomePage from "./screens/home-page/HomePage";
import MakePost from "./screens/make-post/MakePost";
import { getAllPosts, postPost } from "./services/posts";
// import Layout from "./components/shared/layout/Layout";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState();
  const history = useHistory();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const resp = await getAllPosts();
    setPosts(resp);
  };

  const handlePostCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts(prevState => ([...prevState, newPost]));
    history.push('/homepage');
  }

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/homepage");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/homepage");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/register-account">
          <RegisterAccount handleRegister={handleRegister} />
        </Route>
        <Route path="/login">
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route path="/homepage">
          <HomePage currentUser={currentUser} handleLogout={handleLogout} posts={posts} />
        </Route>
        <Route path="/create-post">
          <MakePost currentUser={currentUser} handlePostCreate={handlePostCreate} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
