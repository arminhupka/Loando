import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Utils
import devices from '../utils/devices';

// Actions
import { resetAlerts } from '../actions/alertActions';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import { Container, Section } from '../styles/GlobalStyle';
import LoginForm from '../components/LoginForm/LoginForm';
import Alert from '../components/Alert/Alert';
import PageHeading from '../components/PageHeading/PageHeading';
import LinkButton from '../components/LinkButton/LinkButton';
import Loader from '../components/Loader/Loader';

// Styled Components
const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and ${devices.lg} {
    flex-direction: row;
    margin: 0 -2rem;
  } ;
`;

const Column = styled.div`
  margin-bottom: 2rem;

  :nth-child(2) {
    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2rem;
    }
  }

  @media screen and ${devices.lg} {
    flex: 1 0 50%;
    padding: 0 2rem;

    :first-of-type {
      border-right: 0.1rem solid ${({ theme }) => theme.gray[300]};
    }
  }
`;

const LoginView = () => {
  const dispatch = useDispatch();

  const alertsState = useSelector((state) => state.alertReducer);
  const userState = useSelector((state) => state.userReducer);

  useEffect(() => {
    return () => dispatch(resetAlerts());
  }, []);

  if (userState.isAuth && userState.data.isAdmin) {
    return <Redirect to='/panel/pozyczki' />;
  }

  if (userState.isAuth) {
    return <Redirect to='/konto/nowa-pozyczka' />;
  }

  return (
    <>
      <Helmet>
        <title>Logowanie | Loando</title>
      </Helmet>
      <MainLayout>
        {alertsState.map((alert, index) => (
          <Alert message={alert.message} type={alert.type} idx={index} />
        ))}
        <PageHeading title='Zaloguj' />
        <Section>
          {userState.isLoading ? (
            <Loader />
          ) : (
            <Container>
              <Row>
                <Column>
                  <LoginForm />
                </Column>
                <Column>
                  <h2>Nie masz konta?</h2>
                  <p>Zarejestruj się i złóż wniosek o pierwszą pożyczkę. 3000 zł to maksymalna wysokość pierwszej pożyczki.</p>
                  <LinkButton outline to='/rejestracja'>
                    Zarejestruj się
                  </LinkButton>
                </Column>
              </Row>
            </Container>
          )}
        </Section>
      </MainLayout>
    </>
  );
};

export default LoginView;
