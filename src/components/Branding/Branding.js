import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-size: 3.2rem;
  span {
    color: ${({ theme }) => theme.primary};
  }

  ${({ large }) =>
    large &&
    css`
      font-size: 4.5rem;
    `}

  ${({ white }) =>
    white &&
    css`
      color: #fff;
      span {
        color: #fff;
      }
    `}
`;

const Branding = ({ large, white }) => (
  <Link to='/'>
    <Title large={large} white={white}>
      Loan<span>do</span>
    </Title>
  </Link>
);

Branding.defaultProps = {
  large: false,
  white: false,
};

Branding.propTypes = {
  large: PropTypes.bool,
  white: PropTypes.bool,
};

export default Branding;
