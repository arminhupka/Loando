import React from 'react';
import styled from 'styled-components';

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

const LoansList = () => {
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
          <Row>
            <StyledData>oQU75k</StyledData>
            <StyledData>2200 PLN</StyledData>
            <StyledData>3100 PLN</StyledData>
            <StyledData>12-02-2021</StyledData>
            <StyledData>12</StyledData>
            <StyledData>Aktywna</StyledData>
            <StyledData>
              <button type='button'>Spłać</button>
            </StyledData>
          </Row>
        </tbody>
      </StyledTable>
    </ListWrapper>
  );
};

export default LoansList;
