import React from 'react';
import { useSelector } from 'react-redux';

const NewLoan = () => {
  const loanSettings = useSelector((state) => state.loanReducer.newLoan);

  return (
    <div>
      <h1>New Loan</h1>
      <p>Value: {loanSettings.value} </p>
      <p>Days: {loanSettings.days}</p>
    </div>
  );
};

export default NewLoan;
