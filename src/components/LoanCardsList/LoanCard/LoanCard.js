import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Utils
import { countDays, daysToPercent, daysToPay } from '../../../utils/formatDate';

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
  transition: filter 0.3s, opacity 0.3s;

  & > * {
    margin-bottom: 1rem;
  }

  span {
    display: block;
  }

  ${({ isActive }) =>
    !isActive &&
    css`
      opacity: 0.3;
      filter: grayscale();

      :hover {
        opacity: 1;
        filter: none;
      }
    `}
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.alert.error};
  font-weight: 600;
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

const LoanCard = ({ data }) => {
  return (
    <CardWrapper isActive={data.isActive}>
      <Status isActive={data.isActive} />
      <Title>Do spłaty pozostało</Title>
      {!data.isActive ? <LoanValue>Opłacono w całości</LoanValue> : <LoanValue>{data.toPay - data.paid} PLN</LoanValue>}
      {daysToPay(data.createdAt, data.days) < 0 ? (
        <ErrorMessage>Jesteś {daysToPay(data.createdAt, data.days).toString().substr(1)} dni po terminie.</ErrorMessage>
      ) : (
        <span>
          Termin spłaty {countDays(data.createdAt, data.days)} ({daysToPay(data.createdAt, data.days)} dni)
        </span>
      )}
      <Progress percent={daysToPercent(data.createdAt, data.days)} />
      <LinkButton to={`/konto/pozyczka/${data._id}`}>Szczegóły</LinkButton>
    </CardWrapper>
  );
};
LoanCard.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default LoanCard;
