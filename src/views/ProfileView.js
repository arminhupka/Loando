import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

// Actions
import { resetAlerts } from '../actions/alertActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import NewLoan from '../components/NewLoan/NewLoan';
import Alert from '../components/Alert/Alert';
import Heading from '../components/Heading/Heading';

const ProfileView = () => {
  const dispatch = useDispatch();
  const alertState = useSelector((state) => state.alertReducer);
  const newLoan = useSelector((state) => state.loanReducer.newLoan);

  useEffect(() => {
    return () => dispatch(resetAlerts());
  }, []);

  if (newLoan.isLoading) {
    return <Redirect to='/konto/decyzja' />;
  }

  return (
    <>
      <Helmet>
        <title>Moje Konto | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Twoje konto' />
        {alertState.map((alert, index) => (
          <Alert type={alert.type} message={alert.message} idx={index} />
        ))}
        <NewLoan />
      </AccountLayout>
    </>
  );
};

export default ProfileView;
