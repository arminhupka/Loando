import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import RegisterForm from '../components/RegisterForm/RegisterForm';
import CenterWrapper from '../components/CenterWrapper/CenterWrapper';

const RegisterView = () => {
  return (
    <>
      <Helmet>
        <title>Rejestracja | Loando</title>
      </Helmet>
      <MainLayout>
        <CenterWrapper>
          <RegisterForm />
        </CenterWrapper>
      </MainLayout>
    </>
  );
};

export default RegisterView;
