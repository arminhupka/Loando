import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { setLoan, takeNewLoan } from '../../actions/loanActions';

// Components
import Button from '../Button/Button';
import RangeInput from '../RangeInput/RangeInput';

// Styled Components
const NewLoanWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: ${({ theme }) => theme.primary[400]};
  border-radius: ${({ theme }) => theme.radius.regular};
`;

const NewLoan = () => {
  const dispatch = useDispatch();

  const loanSettings = useSelector((state) => state.loanReducer.loanSettings);

  const [value, setValue] = useState(loanSettings.value);
  const [days, setDays] = useState(loanSettings.days);

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
      <h1>Nowa pożyczka</h1>
      <p>{loanSettings.value}</p>
      <RangeInput value={value} min={100} max={3000} step={100} onChange={setLoanValue} ruler />
      <RangeInput value={days} min={5} max={30} step={5} onChange={setLoanDays} ruler />
      <p>Days: {loanSettings.days}</p>
      <Button onClick={newLoan} alt>
        Weź pożyczkę
      </Button>
    </NewLoanWrapper>
  );
};

export default NewLoan;
