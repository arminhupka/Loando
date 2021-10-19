import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import LinkButton from '../../LinkButton/LinkButton';
import Status from './Status/Status';
import Progress from './Progress/Progress';

// Styled Components
const CardWrapper = styled.div`
  padding: 3rem 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray[300]};
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};

  & > * {
    margin-bottom: 1rem;
  }

  span {
    display: block;
  }
`;

const Title = styled.span`
  display: block;
  line-height: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.gray[400]};
`;

const LoanValue = styled.span`
  display: block;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 4.7rem;
`;

const LoanCard = ({ data }) => (
  <CardWrapper>
    <Status />
    <Title>Do spłaty zostało</Title>
    <LoanValue>{data.toPay} PLN</LoanValue>
    <Progress />
    <LinkButton to={`/konto/pozyczka/${data._id}`}>Szczegóły</LinkButton>
  </CardWrapper>
);

LoanCard.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default LoanCard;
