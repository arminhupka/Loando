import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { resetAlerts } from '../actions/alertActions';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import { Container, Section } from '../styles/GlobalStyle';
import PageHeading from '../components/PageHeading/PageHeading';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Alert from '../components/Alert/Alert';

const RegisterView = () => {
  const dispatch = useDispatch();

  const alertsState = useSelector((state) => state.alertReducer);

  useEffect(() => {
    return () => dispatch(resetAlerts());
  }, []);

  return (
    <>
      <Helmet>
        <title>Rejestracja | Loando</title>
      </Helmet>
      <MainLayout>
        <PageHeading title='Rejestracja' />
        {alertsState.map((alert, index) => (
          <Alert message={alert.message} type={alert.type} idx={index} />
        ))}
        <Section>
          <Container>
            <RegisterForm />
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export default RegisterView;
