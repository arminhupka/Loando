import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

// Utils
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './utils/PrivateRoute';

// Actions
import { authUser } from './actions/userActions';

// Views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProfileView from './views/ProfileView';
import ProfileLoansView from './views/ProfileLoansView';
import ProfileLoanPay from './views/ProfileLoanPay';
import ProfileSettingsView from './views/ProfileSettingsView';
import ProfileChangePassword from './views/ProfileChangePassword';
import ProfileDecisionView from './views/ProfileDecisionView';
import LoanDetailsView from './views/LoanDetailsView';
import NoPageView from './views/NoPageView';

export default () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;
  setAuthToken(token);

  useEffect(() => {
    if (token) {
      dispatch(authUser());
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta name='theme-color' content='#263d6e' />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/rejestracja' component={RegisterView} />
          <Route exact path='/zaloguj' component={LoginView} />
          <PrivateRoute exact path='/konto' component={ProfileView} />
          <PrivateRoute exact path='/konto/pozyczki' component={ProfileLoansView} />
          <PrivateRoute exact path='/konto/pozyczka/:id' component={LoanDetailsView} />
          <PrivateRoute exact path='/konto/pozyczka/splac/:id' component={ProfileLoanPay} />
          <PrivateRoute exact path='/konto/ustawienia' component={ProfileSettingsView} />
          <PrivateRoute exact path='/konto/ustawienia/zmien-haslo' component={ProfileChangePassword} />
          <PrivateRoute exact path='/konto/decyzja' component={ProfileDecisionView} />
          <Route path='*' component={NoPageView} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
