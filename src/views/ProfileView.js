import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect, Link } from 'react-router-dom';

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
  const accountNumber = useSelector((state) => state.userReducer.data?.accountNumber);

  useEffect(() => {
    return () => dispatch(resetAlerts());
  }, []);

  if (newLoan.isLoading) {
    return <Redirect to='/konto/decyzja' />;
  }

  return (
    <>
      <Helmet>
        <title>Nowa pożyczka | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Nowa pożyczka' />
        {alertState.map((alert, index) => (
          <Alert type={alert.type} message={alert.message} idx={index} />
        ))}
        {accountNumber ? (
          <NewLoan />
        ) : (
          <>
            <h2>Nie możesz złożyć wniosku</h2>
            <p>Złożenie wniosku pożyczkowego wymaga podania numeru konta.</p>
            <p>
              Numer konta możesz wprowadzić <Link to='/konto/ustawienia'>tutaj</Link>
            </p>
          </>
        )}
      </AccountLayout>
    </>
  );
};

export default ProfileView;
