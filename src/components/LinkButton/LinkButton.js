import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled.span`
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.primary[400]};
  background: #fff;
  border-radius: ${({ theme }) => theme.radius.regular};
`;

const LinkButton = ({ title, href }) => (
  <Link to={href}>
    <StyledLink>{title}</StyledLink>
  </Link>
);

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkButton;
