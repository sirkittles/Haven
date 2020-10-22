import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { registerUser, loginUser } from './services/auth';
import LandingPage from './screens/landing-page/LandingPage';
import RegisterAccount from './screens/register-account/RegisterAccount';
import LoginPage from './screens/login-page/LoginPage';
import HomePage from './screens/home-page/HomePage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/homepage')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/homepage')
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/register-account'>
          <RegisterAccount handleRegister={handleRegister} />
        </Route>
        <Route path='/login'>
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route path='/homepage'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
