import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// Hooks
import useLoanCalc from '../../hooks/useLoanCalc';

// Actions
import { setLoan } from '../../actions/loanActions';

// Utils
import devices from '../../utils/devices';
import { addDays } from '../../utils/formatDate';

// Components
import RangeInput from '../RangeInput/RangeInput';
import LinkButton from '../LinkButton/LinkButton';

// Styled Components
const CalcWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.regular};
  overflow: hidden;
  background: red !important;

  @media screen and ${devices.lg} {
    max-width: 45rem;
  } ;
`;

const HeadWrapper = styled.div`
  padding: 2rem;
  color: #fff;
  background: ${({ theme }) => theme.primary};
`;

const ValuesWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Header = styled.header`
  margin-bottom: 4rem;
`;

const Title = styled.h3``;

const InputWrapper = styled.div`
  margin-bottom: 2rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const Value = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;

const TableWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: #333;
  background: #fff;
`;

const StyledList = styled.ul`
  margin: 1rem 0;
`;

const StyledItem = styled.li`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #e7e7e7;

  span:first-child {
    font-weight: 500;
  }
`;

const LoanCalc = () => {
  const loanState = useSelector((state) => state.loanReducer.loanSettings);

  const { loanCommission, loanCost, loanInterest, loanRRSO } = useLoanCalc(loanState.value, loanState.days);
  const dispatch = useDispatch();

  const [loanAmount, setLoanAmount] = useState(3000);
  const [loanPeriod, setLoanPeriod] = useState(30);

  const handleLoanValueRange = (e) => {
    setLoanAmount(Number(e.target.value));
  };

  // eslint-disable-next-line no-unused-vars
  const handleLoanDaysRange = (e) => {
    setLoanPeriod(Number(e.target.value));
  };

  useEffect(async () => {
    dispatch(setLoan(loanPeriod, loanAmount));
  }, [loanPeriod, loanAmount]);

  return (
    <CalcWrapper>
      <HeadWrapper>
        <Header>
          <h2>Ile kosztuje pożyczka?</h2>
        </Header>
        <InputWrapper>
          <ValuesWrapper>
            <Title>Chcesz pożyczyć</Title>
            <Value>{loanAmount} PLN</Value>
          </ValuesWrapper>
          <RangeInput value={loanAmount} min={100} max={3000} step={100} onChange={handleLoanValueRange} ruler />
          <ValuesWrapper>
            <span>100</span>
            <span>3000</span>
          </ValuesWrapper>
        </InputWrapper>
        <InputWrapper>
          <ValuesWrapper>
            <Title>Na okres</Title>
            <Value>{loanPeriod} dni</Value>
          </ValuesWrapper>
          <RangeInput value={loanPeriod} min={5} max={30} step={5} onChange={handleLoanDaysRange} ruler />
          <ValuesWrapper>
            <span>5</span>
            <span>30</span>
          </ValuesWrapper>
        </InputWrapper>
      </HeadWrapper>
      <TableWrapper>
        <h2>Całkowity koszt</h2>
        <StyledList>
          <StyledItem>
            <span>Oddajesz</span>
            <span>{loanCost} zł</span>
          </StyledItem>
          <StyledItem>
            <span>Dzień spłaty</span>
            <span>{addDays(loanPeriod)}</span>
          </StyledItem>
          <StyledItem>
            <span>Odsetki</span>
            <span>{loanInterest} zł</span>
          </StyledItem>
          <StyledItem>
            <span>Prowizja</span>
            <span>{loanCommission} zł</span>
          </StyledItem>
          <StyledItem>
            <span>RRSO</span>
            <span>{loanRRSO}%</span>
          </StyledItem>
        </StyledList>
        <LinkButton to='/konto/nowa-pozyczka'>Weź pożyczkę</LinkButton>
      </TableWrapper>
    </CalcWrapper>
  );
};

export default LoanCalc;
