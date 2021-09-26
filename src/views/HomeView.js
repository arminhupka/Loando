import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import Hero from '../components/Hero/Hero';
import Steps from '../components/Steps/Steps';

const HomeView = () => {
  return (
    <>
      <Helmet>
        <title>Loando | Szybkie pożyczki online</title>
      </Helmet>
      <MainLayout>
        <Hero />
        <Steps />
      </MainLayout>
    </>
  );
};

export default HomeView;
