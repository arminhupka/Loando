import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Utils
import devices from '../../utils/devices';

// Components
import RangeInput from '../RangeInput/RangeInput';

// Styled Components
const CalcWrapper = styled.div`
  width: 100%;
  border-radius: 0.3rem;
  overflow: hidden;

  @media screen and ${devices.lg};
  max-width: 45rem;
`;

const HeadWrapper = styled.div`
  padding: 2rem;
  color: #fff;
  background: ${({ theme }) => theme.primary};
`;

const ValuesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableWrapper = styled.div`
  padding: 2rem;
  color: #333;
  background: #fff;
`;

const StyledList = styled.ul``;

const StyledItem = styled.li`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #e7e7e7;
`;

const LoanCalc = () => {
  const rrso = 819.12;

  const [loanValue, setLoanValue] = useState(3000);
  const [loanDays, setLoanDays] = useState(30);
  const [valueToReturn, setValueToReturn] = useState(0);

  const handleLoanValueRange = (e) => {
    setLoanValue(e.target.value);
  };

  const handleLoanDaysRange = (e) => {
    setLoanDays(e.target.value);
  };

  useEffect(() => {
    setValueToReturn(123);
  }, [loanDays, loanValue]);

  return (
    <CalcWrapper>
      <HeadWrapper>
        <h2>Ile kosztuje pożyczka?</h2>
        <ValuesWrapper>
          <span>Chcesz pożyczyć</span>
          <span>{loanValue}</span>
        </ValuesWrapper>
        <RangeInput value={loanValue} min='100' max='3000' step='100' onChange={handleLoanValueRange} />
        <ValuesWrapper>
          <span>100</span>
          <span>3000</span>
        </ValuesWrapper>
        <RangeInput value={loanDays} min='5' max='30' step='5' onChange={handleLoanDaysRange} />
        <ValuesWrapper>
          <span>Okres</span>
          <span>{loanDays} dni</span>
        </ValuesWrapper>
      </HeadWrapper>
      <TableWrapper>
        <h3>Całkowity koszt</h3>
        <StyledList>
          <StyledItem>
            <span>Oddajesz</span>
            <span>{valueToReturn}</span>
          </StyledItem>
          <StyledItem>
            <span>Dzień spłaty</span>
            <span>Value</span>
          </StyledItem>
          <StyledItem>
            <span>Odsetki</span>
            <span>Value</span>
          </StyledItem>
          <StyledItem>
            <span>Prowizja</span>
            <span>Value</span>
          </StyledItem>
          <StyledItem>
            <span>RRSO</span>
            <span>{(rrso / 100) * 100}%</span>
          </StyledItem>
        </StyledList>
      </TableWrapper>
    </CalcWrapper>
  );
};

export default LoanCalc;
