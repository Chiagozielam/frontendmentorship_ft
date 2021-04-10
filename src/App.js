import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TopNavigation from "./components/topNavigation/topNavigation";
import './constants/colors.scss';
import LandingPage from "./pages/landingPage/landingPage";
import LoginPage from "./pages/loginPage/loginPage";
import PostAuth from "./pages/postAuth";
import RegisterPage from "./pages/registerPage/registerPage";
import { LANDING_PAGE, LOGIN_PAGE, POST_AUTH_ROUTES, REGISTRATION_PAGE } from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavigation />
        <Switch>
          <Route exact path={LANDING_PAGE} component={LandingPage} />
          <Route path={LOGIN_PAGE} component={LoginPage} />
          <Route path={REGISTRATION_PAGE} component={RegisterPage} />
          <Route path={POST_AUTH_ROUTES} component={PostAuth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
