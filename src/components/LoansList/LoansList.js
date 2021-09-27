import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Utils
import formatDate, { countDays } from '../../utils/formatDate';

// Styled Components
const ListWrapper = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.primary[50]};
  border-radius: ${({ theme }) => theme.radius.regular};
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledHead = styled.thead`
  background: ${({ theme }) => theme.primary[400]};
`;

const StyledHeadTitle = styled.th`
  padding: 1rem 2rem;
  color: #fff;
`;

const StyledData = styled.td`
  padding: 1rem 2rem;
  text-align: center;
`;

const Row = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.primary[50]};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #fff;
    background: ${({ theme }) => theme.primary[100]};
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
            <StyledHeadTitle>Kwota do zwrotu</StyledHeadTitle>
            <StyledHeadTitle>Data przyznania</StyledHeadTitle>
            <StyledHeadTitle>Dni do zwrotu</StyledHeadTitle>
            <StyledHeadTitle>Status</StyledHeadTitle>
            <StyledHeadTitle>Akcje</StyledHeadTitle>
          </tr>
        </StyledHead>
        <tbody>
          {loans.map((loan) => (
            // eslint-disable-next-line no-underscore-dangle
            <Row key={loan._id}>
              {/* eslint-disable-next-line no-underscore-dangle */}
              <StyledData>{loan._id.substring(0, 5)}</StyledData>
              <StyledData>{loan.value} PLN</StyledData>
              <StyledData>3100 PLN</StyledData>
              <StyledData>{formatDate(loan.createdAt)}</StyledData>
              <StyledData>{countDays(loan.createdAt, loan.days)}</StyledData>
              <StyledData>{loan.isActive ? 'Aktywna' : 'Zamknięta'}</StyledData>
              <StyledData>
                <button type='button'>Szczegóły</button>
              </StyledData>
            </Row>
          ))}
        </tbody>
      </StyledTable>
    </ListWrapper>
  );
};

LoansList.propTypes = {
  loans: PropTypes.arrayOf.isRequired,
};

export default LoansList;
