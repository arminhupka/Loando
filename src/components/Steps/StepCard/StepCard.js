import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledArticle = styled.article`
  position: relative;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid ${({ theme }) => theme.gray['100']};
  border-radius: ${({ theme }) => theme.radius.regular};
  transition: color 0.1s, background-color 0.1s;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: ${({ theme }) => theme.radius.regular};
    box-shadow: 0 1rem 1.6rem ${({ theme }) => theme.primary};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.1s;
  }

  :hover {
    color: #fff;
    background: ${({ theme }) => theme.primary};

    & > div {
      background: ${({ theme }) => theme.primaryDark};
    }

    ::before {
      opacity: 0.3;
    }

    svg {
      color: #fff;
    }
  }
`;

const CardWrapper = styled.div`
  padding: 2.5rem;
  display: flex;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;

  svg {
    font-size: 5rem;
    color: #fff;
  }
`;
const Heading = styled.h3`
  margin: 2rem 0 1rem;
`;
const Description = styled.p`
  text-align: center;
`;

const StepCard = ({ title, description, icon }) => (
  <StyledArticle>
    <CardWrapper>{icon}</CardWrapper>
    <Heading>{title}</Heading>
    <Description>{description}</Description>
  </StyledArticle>
);

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default StepCard;
