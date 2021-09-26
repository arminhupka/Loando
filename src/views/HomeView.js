import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import Hero from '../components/Hero/Hero';

const HomeView = () => {
  return (
    <>
      <Helmet>
        <title>Loando | Szybkie pożyczki online</title>
      </Helmet>
      <MainLayout>
        <Hero />
        <h1>Loando App</h1>
      </MainLayout>
    </>
  );
};

export default HomeView;
