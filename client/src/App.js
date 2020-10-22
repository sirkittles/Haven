import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import LandingPage from './screens/landing-page/LandingPage';
import RegisterAccount from './screens/register-account/RegisterAccount';
import { registerUser, loginUser } from './services/auth';

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
    history.pushState('/homepage')
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
        <Route path='login'>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
