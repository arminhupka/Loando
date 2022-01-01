import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Hooks
import useLoanCalc from '../../hooks/useLoanCalc';

// Actions
import { setLoan, takeNewLoan } from '../../actions/loanActions';

// Components
import Button from '../Button/Button';
import RangeInput from '../RangeInput/RangeInput';
import { addDays } from '../../utils/formatDate';

// Styled Components
const NewLoanWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const List = styled.ul``;

const ListItem = styled.li`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #e7e7e7;

  span:first-child {
    font-weight: 500;
  }
`;

const RangeWrapper = styled.div`
  margin-bottom: 2rem;
`;

const RangeTitleValueWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

const RangeTitle = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const RangeValue = styled.span`
  font-size: 3rem;
  font-weight: 800;
`;

const ListWrapper = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  color: initial;
  background: #fff;
  border-radius: ${({ theme }) => theme.radius.regular};
`;

const NewLoan = () => {
  const loanSettings = useSelector((state) => state.loanReducer.loanSettings);

  const [value, setValue] = useState(loanSettings.value);
  const [days, setDays] = useState(loanSettings.days);

  const dispatch = useDispatch();
  const { loanCommission, loanCost, loanInterest, loanRRSO } = useLoanCalc(value, days);

  const setLoanValue = (e) => {
    setValue(Number(e.target.value));
    dispatch(setLoan(days, value));
  };
  const setLoanDays = (e) => {
    setDays(Number(e.target.value));
    dispatch(setLoan(days, value));
  };

  const newLoan = () => dispatch(takeNewLoan());

  return (
    <NewLoanWrapper>
      <Title>Nowa pożyczka</Title>
      <RangeWrapper>
        <RangeTitleValueWrapper>
          <RangeTitle>Pożyczasz</RangeTitle>
          <RangeValue>{value} PLN</RangeValue>
        </RangeTitleValueWrapper>
        <RangeInput value={value} min={100} max={3000} step={100} onChange={setLoanValue} ruler />
      </RangeWrapper>
      <RangeWrapper>
        <RangeTitleValueWrapper>
          <RangeTitle>Na okres</RangeTitle>
          <RangeValue>{days} dni</RangeValue>
        </RangeTitleValueWrapper>
        <RangeInput value={days} min={5} max={30} step={5} onChange={setLoanDays} ruler />
      </RangeWrapper>
      <ListWrapper>
        <List>
          <ListItem>
            <span>Oddajesz</span>
            <span>{loanCost} zł</span>
          </ListItem>
          <ListItem>
            <span>Dzień spłaty</span>
            <span>{addDays(days)}</span>
          </ListItem>
          <ListItem>
            <span>Odsetki</span>
            <span>{loanInterest} zł</span>
          </ListItem>
          <ListItem>
            <span>Prowizja</span>
            <span>{loanCommission} zł</span>
          </ListItem>
          <ListItem>
            <span>RRSO</span>
            <span>{loanRRSO}%</span>
          </ListItem>
        </List>
      </ListWrapper>
      <Button outline white onClick={newLoan} alt>
        Biorę pożyczkę
      </Button>
    </NewLoanWrapper>
  );
};

export default NewLoan;
