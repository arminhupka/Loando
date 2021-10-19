import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
  margin-bottom: 2rem;
`;

const HeadingTitle = styled.h1`
  position: relative;
  padding-bottom: 2rem;
  font-size: 4rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.primary};
`;

const Heading = ({ title }) => (
  <HeadingWrapper>
    <HeadingTitle>{title}</HeadingTitle>
  </HeadingWrapper>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
