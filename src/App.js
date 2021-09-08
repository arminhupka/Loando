import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Views
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import NoPageView from './views/NoPageView';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route path='/rejestracja' component={RegisterView} />
        <Route path='/konto' component={ProfileView} />
        <Route path='*' component={NoPageView} />
      </Switch>
    </BrowserRouter>
  );
};
