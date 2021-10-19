import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import { Container, Section } from '../styles/GlobalStyle';
import PageHeading from '../components/PageHeading/PageHeading';

const RegisterView = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt | Loando</title>
      </Helmet>
      <MainLayout>
        <PageHeading title='Kontakt' />
        <Section>
          <Container>
            <h1>Kontakt</h1>
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export default RegisterView;
