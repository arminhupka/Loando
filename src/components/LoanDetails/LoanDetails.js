import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import devices from '../../utils/devices';
import formatDate from '../../utils/formatDate';

// Components
import LinkButton from '../LinkButton/LinkButton';

// Styled Componetns
const ListWrapper = styled.div``;

const LoansList = styled.ul``;

const LoanItem = styled.li`
  margin-bottom: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.primary[50]};
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

const LoanDetails = ({ data }) => (
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
        <LinkButton to={`/konto/pozyczka/splac/${data._id}`} full>
          Spłać pożyczkę
        </LinkButton>
      </LoanItem>
    </LoansList>
  </ListWrapper>
);

LoanDetails.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default LoanDetails;
