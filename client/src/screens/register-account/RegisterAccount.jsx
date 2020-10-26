import React, { useState } from "react";
import Header from "../../components/shared/header/Header";
import "./RegisterAccount.css";

const RegisterAccount = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="register-page">
      <Header />
      <div className="floater"></div>
      <div className="register-header">
        <h2>Register</h2>
      </div>
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <div className="reg-label-input">
          <label>
            Username:
            <input
              className="register-input"
              type="text"
              value={username}
              name="username"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="reg-label-input">
          <label>
            Email:
            <input
              className="register-input-email"
              type="text"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="reg-label-input">
          <label>
            Password:
            <input
              className="register-input"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="register-submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterAccount;
