import React from 'react';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import Hero from '../components/Hero/Hero';

const HomeView = () => {
  return (
    <MainLayout>
      <Hero />
      <h1>Loando App</h1>
    </MainLayout>
  );
};

export default HomeView;
