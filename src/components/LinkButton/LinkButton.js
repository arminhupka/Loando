import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  position: relative;
  padding: 1.5rem 2rem;
  display: block;
  color: #fff;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary[400]};
  border: none;
  border-radius: ${({ theme }) => theme.radius.regular};
  transition: color 0.3s, background 0.3s;

  &::before {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s, visibility 1s;
  }

  &:hover {
    background: ${({ theme }) => theme.primary[300]};
  }

  ${({ alt }) =>
    alt &&
    css`
      color: ${({ theme }) => theme.primary[400]};
      background: #fff;

      &:hover {
        background: ${({ theme }) => theme.gray[100]};
      }
    `}

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`;

const LinkButton = ({ children, to, alt, full }) => (
  <StyledLink alt={alt} to={to} full={full}>
    {children}
  </StyledLink>
);

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  alt: PropTypes.bool,
  full: PropTypes.bool,
};

LinkButton.defaultProps = {
  alt: false,
  full: false,
};

export default LinkButton;
