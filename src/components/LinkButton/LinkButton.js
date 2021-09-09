import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled.span``;

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
