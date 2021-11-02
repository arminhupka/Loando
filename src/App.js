import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Utils
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './utils/PrivateRoute';

// Actions
import { authUser } from './actions/userActions';

// Views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AdminLoansView from './views/AdminLoansView';
import ProfileDashboard from './views/ProfileDashboard';
import ProfileView from './views/ProfileView';
import ProfileLoansView from './views/ProfileLoansView';
import ProfileLoanPay from './views/ProfileLoanPay';
import ProfileSettingsView from './views/ProfileSettingsView';
import ProfileChangePassword from './views/ProfileChangePassword';
import ProfileDecisionView from './views/ProfileDecisionView';
import ProfileCheckPaymentStatus from './views/ProfileCheckPaymentStatus';
import LoanDetailsView from './views/LoanDetailsView';
import ContactView from './views/ContactView';
import OfferView from './views/OfferView';
import NoPageView from './views/NoPageView';

export default () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;
  setAuthToken(token);

  useEffect(() => {
    if (token) {
      dispatch(authUser());
    }
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/rejestracja' component={RegisterView} />
          <Route exact path='/zaloguj' component={LoginView} />
          <Route exact path='/oferta' component={OfferView} />
          <Route exact path='/kontakt' component={ContactView} />
          <PrivateRoute exact path='/panel/pozyczki' component={AdminLoansView} />
          <PrivateRoute exact path='/konto' component={ProfileDashboard} />
          <PrivateRoute exact path='/konto/nowa-pozyczka' component={ProfileView} />
          <PrivateRoute exact path='/konto/pozyczki' component={ProfileLoansView} />
          <PrivateRoute exact path='/konto/pozyczka/:id' component={LoanDetailsView} />
          <PrivateRoute exact path='/konto/pozyczka/splac/:id' component={ProfileLoanPay} />
          <PrivateRoute exact path='/konto/status/:id' component={ProfileCheckPaymentStatus} />
          <PrivateRoute exact path='/konto/ustawienia' component={ProfileSettingsView} />
          <PrivateRoute exact path='/konto/ustawienia/zmien-haslo' component={ProfileChangePassword} />
          <PrivateRoute exact path='/konto/decyzja' component={ProfileDecisionView} />
          <Route component={NoPageView} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
