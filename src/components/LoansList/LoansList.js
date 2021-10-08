import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Utils
import formatDate, { countDays } from '../../utils/formatDate';
import devices from '../../utils/devices';

// Components
import LinkButton from '../LinkButton/LinkButton';

// Styled Components
const ListWrapper = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.primary[50]};
  border-radius: ${({ theme }) => theme.radius.regular};
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  display: block;
  border-collapse: collapse;
  table-layout: fixed;

  //& > * {
  //  display: block;
  //}

  @media screen and ${devices.lg} {
    width: 100%;
    display: table;
  }
`;

const StyledHead = styled.thead`
  position: absolute;
  top: -9999rem;
  left: -9999rem;

  @media screen and ${devices.lg} {
    position: relative;
    top: initial;
    left: initial;
    background: ${({ theme }) => theme.primary[400]};
  }
`;

const Body = styled.tbody`
  display: block;
  width: 100%;

  @media screen and ${devices.lg} {
    display: table-row-group;
  }
`;

const StyledHeadTitle = styled.th`
  padding: 1rem 2rem;
  color: #fff;
`;

const StyledData = styled.td`
  position: relative;
  display: block;
  padding: 2rem;
  text-align: right;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary[50]};

  :last-child {
    border-bottom: none;
  }

  ::before {
    position: absolute;
    display: inline-block;
    left: 2rem;
    top: 50%;
    font-weight: 500;
    transform: translateY(-50%);
  }

  :nth-child(1)::before {
    content: 'ID';
  }
  :nth-child(2)::before {
    content: 'Kwota';
  }
  :nth-child(3)::before {
    content: 'Do spłaty';
  }
  :nth-child(4)::before {
    content: 'Data przyznania';
  }
  :nth-child(5)::before {
    content: 'Data spłaty';
  }
  :nth-child(6)::before {
    content: 'Status';
  }

  @media screen and ${devices.lg} {
    display: table-cell;
    padding: 1rem 0;
    text-align: center;

    ::before {
      display: none;
    }
  }
`;

const Row = styled.tr`
  display: block;
  width: 100%;
  :nth-child(even) {
    background: ${({ theme }) => theme.primary[50]};
    ${StyledData} {
      border-bottom: 1px solid ${({ theme }) => theme.gray[200]};
      :last-child {
        border-bottom: none;
      }
    }
  }

  @media screen and ${devices.lg} {
    display: table-row;
  }
`;

const LoansList = ({ loans }) => {
  return (
    <ListWrapper>
      <StyledTable>
        <StyledHead>
          <tr>
            <StyledHeadTitle>ID</StyledHeadTitle>
            <StyledHeadTitle>Kwota</StyledHeadTitle>
            <StyledHeadTitle>Do spłaty</StyledHeadTitle>
            <StyledHeadTitle>Data przyznania</StyledHeadTitle>
            <StyledHeadTitle>Data spłaty</StyledHeadTitle>
            <StyledHeadTitle>Status</StyledHeadTitle>
            <StyledHeadTitle>Akcje</StyledHeadTitle>
          </tr>
        </StyledHead>
        <Body>
          {loans.map((loan) => (
            <Row key={loan._id}>
              <StyledData>{loan._id.substring(0, 5)}</StyledData>
              <StyledData>{loan.value} PLN</StyledData>
              <StyledData>{loan.toPay} PLN</StyledData>
              <StyledData>{formatDate(loan.createdAt)}</StyledData>
              <StyledData>{countDays(loan.createdAt, loan.days)}</StyledData>
              <StyledData>{loan.isActive ? 'Aktywna' : 'Zamknięta'}</StyledData>
              <StyledData>
                <LinkButton to={`/konto/pozyczka/${loan._id}`}>Szczegóły</LinkButton>
              </StyledData>
            </Row>
          ))}
        </Body>
      </StyledTable>
    </ListWrapper>
  );
};

LoansList.propTypes = {
  loans: PropTypes.arrayOf.isRequired,
};

export default LoansList;
