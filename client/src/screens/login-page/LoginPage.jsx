import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const { username, password } = formData;
  const { error, handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}>
        <h2>Login</h2>
        <label>Username:
         <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </label>
        <label>Password:
         <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
         />
        </label>
        <button>Login</button>
        <p>Don't have an account yet?</p><Link to='/register'>Join Here</Link>
      </form>
    </div>
  )
}

export default LoginPage;