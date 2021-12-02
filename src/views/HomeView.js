import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import Hero from '../components/Hero/Hero';
import Steps from '../components/Steps/Steps';
import Alert from '../components/Alert/Alert';

const HomeView = () => {
  const alertsState = useSelector((state) => state.alertReducer);

  return (
    <>
      <Helmet>
        <title>Loando | Szybkie pożyczki online</title>
      </Helmet>
      <MainLayout>
        {alertsState.map((alert, index) => (
          <Alert message={alert.message} type={alert.type} idx={index} />
        ))}
        <Hero />
        <Steps />
      </MainLayout>
    </>
  );
};

export default HomeView;
