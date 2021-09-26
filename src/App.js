import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Utils
// import PrivateRoute from './utils/PrivateRoute';

// Actions
import { authUser } from './actions/userActions';

// Views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import ProfileSettingsView from './views/ProfileSettingsView';
import NoPageView from './views/NoPageView';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUser());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/rejestracja' component={RegisterView} />
          <Route exact path='/zaloguj' component={LoginView} />
          <Route exact path='/konto' component={ProfileView} />
          <Route exact path='/konto/ustawienia' component={ProfileSettingsView} />
          <Route path='*' component={NoPageView} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
