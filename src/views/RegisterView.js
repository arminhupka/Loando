import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import { Container, Section } from '../styles/GlobalStyle';
import PageHeading from '../components/PageHeading/PageHeading';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterView = () => {
  return (
    <>
      <Helmet>
        <title>Rejestracja | Loando</title>
      </Helmet>
      <MainLayout>
        <PageHeading title='Rejestracja' />
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
