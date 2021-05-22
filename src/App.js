import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TopNavigation from "./components/topNavigation/topNavigation";
import './constants/colors.scss';
import LandingPage from "./pages/landingPage/landingPage";
import LoginPage from "./pages/loginPage/loginPage";
import PostAuth from "./pages/postAuth";
import RegisterPage from "./pages/registerPage/registerPage";
import CongratulationsPage from "./pages/congratulationsPage/congratulations";
import { CONGRATULATION_PAGE, LANDING_PAGE, LOGIN_PAGE, POST_AUTH_ROUTES, REGISTRATION_PAGE, PAYMENT_VERIFICATION_PAGE } from './routes';
import VerifyEmailPage from "./pages/verifyEmailPage/verifyEmailPage";
import PaymentVerificationPage from "./pages/payment-verification-page/paymentVerificationPage";


function App() {
  return (
    <div className="App">
      <Router>
        <TopNavigation />
        <Switch>
          <Route exact path={LANDING_PAGE} component={LandingPage} />
          <Route path={LOGIN_PAGE} component={LoginPage} />
          <Route path={REGISTRATION_PAGE} component={RegisterPage} />
          <Route path={CONGRATULATION_PAGE} component={CongratulationsPage} />
          <Route path="/verify" component={VerifyEmailPage} />
          <Route path={POST_AUTH_ROUTES} component={PostAuth} />
          <Route path={PAYMENT_VERIFICATION_PAGE} component={PaymentVerificationPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
