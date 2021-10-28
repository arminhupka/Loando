import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// Actions
import { changeAccountNumber } from '../../actions/userActions';

// Components
import Modal from '../Modal/Modal';
import { Row, Col } from '../../styles/GlobalStyle';
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

const ErrorMessage = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.alert.error};
`;

const ChangeAccountModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();

    if (value.length < 16) {
      setError('Numer rachunku jest nieprawidłowy');
      return;
    }

    dispatch(changeAccountNumber(value));
    onClose();
  };

  const handleInput = (e) => setValue(e.target.value);

  return (
    <Modal onClose={onClose} title='Zmiana numeru konta'>
      <StyledForm onSubmit={handleForm}>
        <Row>
          <Col>
            <Input error={error} placeholder='Numer konta' value={value} onChange={handleInput} />
          </Col>
        </Row>
        <ErrorMessage>{error}</ErrorMessage>
        <Button type='submit'>Zmień numer rachunku</Button>
      </StyledForm>
    </Modal>
  );
};

ChangeAccountModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChangeAccountModal;
