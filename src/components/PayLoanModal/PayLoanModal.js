import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// Components
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';

// Styled Components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const PayLoanModal = ({ onClose }) => {
  const currentLoan = useSelector((state) => state.loanReducer.currentLoan.data);

  const [value, setValue] = useState(currentLoan.toPay - currentLoan.paid);

  const handleRangeInput = (e) => setValue(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <Modal onClose={onClose} title='Spłacasz pożyczkę'>
      <StyledForm onSubmit={handleForm}>
        <input type='range' onChange={handleRangeInput} />
        <Input value={value} />
        <Button>Spłać</Button>
      </StyledForm>
    </Modal>
  );
};

PayLoanModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PayLoanModal;
