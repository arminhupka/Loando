import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Utils
import devices from '../../utils/devices';

// Components
import { Container } from '../../styles/GlobalStyle';

// Styled Components
const PageHeadingWrapper = styled.div`
  position: relative;
  padding: 5rem 0;
  background: url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')
    no-repeat;
  background-size: cover;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  h1 {
    position: relative;
    color: #fff;
  }

  @media screen and ${devices.lg} {
    padding-top: 25rem;
    padding-bottom: 10rem;

    h1 {
      font-size: 6.2rem;
    }
  }
`;

const PageHeading = ({ title }) => (
  <PageHeadingWrapper>
    <Container>
      <h1>{title}</h1>
    </Container>
  </PageHeadingWrapper>
);

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeading;
