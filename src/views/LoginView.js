import React from 'react';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import CenterWrapper from '../components/CenterWrapper/CenterWrapper';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginView = () => (
  <MainLayout>
    <CenterWrapper>
      <LoginForm />
    </CenterWrapper>
  </MainLayout>
);

export default LoginView;
