import React from 'react';
import { Helmet } from 'react-helmet';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import { Container, Section, Row, Col } from '../styles/GlobalStyle';
import PageHeading from '../components/PageHeading/PageHeading';
import Heading from '../components/Heading/Heading';
import Label from '../components/Label/Label';
import Input from '../components/Input/Input';
import TextArea from '../components/TextArea/TextArea';
import Button from '../components/Button/Button';
import Accordion from '../components/Accordion/Accordion';

const RegisterView = () => {
  const faqData = [
    {
      title: 'Title One',
    },
    {
      title: 'Title Two',
    },
    {
      title: 'Title Three',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt | Loando</title>
      </Helmet>
      <MainLayout>
        <PageHeading title='Kontakt' />
        <Section>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Heading title='Napisz wiadomość' />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label>Imię</Label>
                    <Input />
                  </Col>
                  <Col>
                    <Label>Nazwisko</Label>
                    <Input />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label>Numer telefonu</Label>
                    <Input />
                  </Col>
                  <Col>
                    <Label>Temat</Label>
                    <Input />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextArea />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button>Wyślij wiadomość</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <Heading title='FAQ' />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Accordion data={faqData} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Section>
      </MainLayout>
    </>
  );
};

export default RegisterView;
