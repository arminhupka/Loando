import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { resetAlerts } from '../actions/alertActions';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import CenterWrapper from '../components/CenterWrapper/CenterWrapper';
import LoginForm from '../components/LoginForm/LoginForm';
import Alert from '../components/Alert/Alert';

const LoginView = () => {
  const dispatch = useDispatch();

  const alertsState = useSelector((state) => state.alertReducer);

  useEffect(() => {
    return () => dispatch(resetAlerts());
  }, []);

  return (
    <>
      <Helmet>
        <title>Logowanie | Loando</title>
      </Helmet>
      <MainLayout>
        {alertsState.map((alert, index) => (
          <Alert message={alert.message} type={alert.type} idx={index} />
        ))}
        <CenterWrapper>
          <LoginForm />
        </CenterWrapper>
      </MainLayout>
    </>
  );
};

export default LoginView;
