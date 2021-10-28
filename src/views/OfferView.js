import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import { Container, Section } from '../styles/GlobalStyle';
import PageHeading from '../components/PageHeading/PageHeading';

const OfferView = () => {
  return (
    <>
      <Helmet>
        <title>Oferta | Loando</title>F
      </Helmet>
      <MainLayout>
        <PageHeading title='Oferta' />
        <Section>
          <Container>
            <h1>Oferta</h1>
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export default OfferView;
