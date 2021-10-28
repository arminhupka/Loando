import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import devices from '../../utils/devices';
import formatDate from '../../utils/formatDate';

// Components
import Button from '../Button/Button';

// Styled Componetns
const ListWrapper = styled.div``;

const LoansList = styled.ul``;

const LoanItem = styled.li`
  margin-bottom: 1rem;
  border: 0.2rem solid ${({ theme }) => theme.gray[300]};
  border-radius: ${({ theme }) => theme.radius.regular};
  overflow: hidden;

  :last-child {
    border: none;
  }

  @media screen and ${devices.lg} {
    display: flex;
  }
`;

const LabelWrapper = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.primary[50]};

  span {
    font-weight: 500;
  }

  @media screen and ${devices.lg} {
    flex: 1;
    text-align: left;
  }
`;

const DataWrapper = styled.div`
  text-align: center;

  @media screen and ${devices.lg} {
    flex: 2;
    text-align: left;
  }
`;

const Data = styled.span`
  padding: 1.5rem 2rem;
  display: block;
`;

const LoanDetails = ({ data, onOpenModal }) => (
  <ListWrapper>
    <LoansList>
      <LoanItem>
        <LabelWrapper>
          <Data>ID Pożyczki</Data>
        </LabelWrapper>
        <DataWrapper>
          <Data>{data._id}</Data>
        </DataWrapper>
      </LoanItem>
      <LoanItem>
        <LabelWrapper>
          <Data>Kwota pożyczki</Data>
        </LabelWrapper>
        <DataWrapper>
          <Data>{data.value} PLN</Data>
        </DataWrapper>
      </LoanItem>
      <LoanItem>
        <LabelWrapper>
          <Data>Do spłaty</Data>
        </LabelWrapper>
        <DataWrapper>
          <Data>{data.toPay} PLN</Data>
        </DataWrapper>
      </LoanItem>
      <LoanItem>
        <LabelWrapper>
          <Data>Data przyznania</Data>
        </LabelWrapper>
        <DataWrapper>
          <Data>{formatDate(data.createdAt)}</Data>
        </DataWrapper>
      </LoanItem>
      <LoanItem>
        <LabelWrapper>
          <Data>Okres pożyczkowy</Data>
        </LabelWrapper>
        <DataWrapper>
          <Data>{data.days} dni</Data>
        </DataWrapper>
      </LoanItem>
      <LoanItem>
        <LabelWrapper>
          <Data>Status</Data>
        </LabelWrapper>
        <DataWrapper>
          <Data>{data.isActive ? 'Aktywna' : 'Zamknięta'}</Data>
        </DataWrapper>
      </LoanItem>
      <LoanItem>
        <Button full onClick={onOpenModal}>
          Spłać pożyczkę
        </Button>
      </LoanItem>
    </LoansList>
  </ListWrapper>
);

LoanDetails.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default LoanDetails;
