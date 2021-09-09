import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Utils
// import PrivateRoute from './utils/PrivateRoute';

// Views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import NoPageView from './views/NoPageView';
// import PrivateRoute from './utils/PrivateRoute';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='/rejestracja' component={RegisterView} />
        <Route path='/zaloguj' component={LoginView} />
        <Route path='/konto' component={ProfileView} />
        <Route path='*' component={NoPageView} />
      </Switch>
    </BrowserRouter>
  );
};
