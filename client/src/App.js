import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import LandingPage from './screens/landing-page/LandingPage';
import { registerUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.pushState('/')
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
