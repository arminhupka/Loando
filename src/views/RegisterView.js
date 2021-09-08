import React from 'react';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterView = () => {
  return (
    <MainLayout>
      <h1>Login View</h1>
      <RegisterForm />
    </MainLayout>
  );
};

export default RegisterView;
