import React from 'react';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import RegisterForm from '../components/RegisterForm/RegisterForm';
import CenterWrapper from '../components/CenterWrapper/CenterWrapper';

const RegisterView = () => {
  return (
    <MainLayout>
      <CenterWrapper>
        <RegisterForm />
      </CenterWrapper>
    </MainLayout>
  );
};

export default RegisterView;
