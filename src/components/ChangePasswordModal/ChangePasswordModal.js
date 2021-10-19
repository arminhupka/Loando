import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Loader from '../Loader/Loader';

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

const ChangePasswordModal = ({ onClose }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState();
  const [password, setPassword] = useState('');
  const [verifyPw, setVerifyPw] = useState('');

  // eslint-disable-next-line consistent-return
  const handlePasswordChange = (e) => {
    e.preventDefault();

    setError('');

    if (!password || !verifyPw) {
      return setError('Musisz wypełnić oba pola');
    }

    if (password.length < 5) {
      return setError('Hasło jest za krótkie');
    }

    if (password !== verifyPw) {
      return setError('Hasła nie są identyczne');
    }

    setLoading(true);
  };

  return (
    <Modal title='Zmiana hasła' onClose={onClose}>
      {loading ? (
        <Loader />
      ) : (
        <StyledForm onSubmit={(e) => handlePasswordChange(e)}>
          <Input
            error={error}
            type='password'
            placeholder='Stare hasło'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            error={error}
            type='password'
            placeholder='Nowe hasło'
            value={verifyPw}
            onChange={(e) => setVerifyPw(e.target.value)}
          />
          <ErrorMessage>{error}</ErrorMessage>
          <Button onClick={handlePasswordChange}>Zmień hasło</Button>
        </StyledForm>
      )}
    </Modal>
  );
};

ChangePasswordModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChangePasswordModal;
