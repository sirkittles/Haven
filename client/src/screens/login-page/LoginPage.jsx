import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/shared/header/Header";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-content-container">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          {/* {
          error &&
          <p>{error}</p>
        } */}
          <h2>Login</h2>
          <div>
            <label className="login-username">
              Username:
              <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="password-container">
            <label>
              Password:
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="login-button">Login</button>
        </form>
        <p>Don't have an account yet?</p>
        <Link to="/register-account">Join Here</Link>
      </div>
    </div>
  );
};

export default LoginPage;
