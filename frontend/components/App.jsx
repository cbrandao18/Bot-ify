import React from 'react';
import { Route } from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from '../components/splash/splash';
import NavBarContainer from '../components/nav_bar/nav_bar_container';

const App = () => (
    <div>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Splash} />
        <ProtectedRoute path="/browse/featured" component={NavBarContainer} />
    </div>
);

export default App;