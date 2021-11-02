import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

// Actions
import { changePassword, resetUserPasswordState } from '../../actions/userActions';

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

const ChangePasswordModal = ({ onClose }) => {
  const passwordState = useSelector((state) => state.userReducer.passwordChange);

  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPw, setVerifyPw] = useState('');

  // eslint-disable-next-line consistent-return
  const handlePasswordChange = (e) => {
    e.preventDefault();

    setError('');

    if (!currentPassword || !password || !verifyPw) {
      return setError('Musisz wypełnić wszystkie pola');
    }

    if (password.length < 5) {
      return setError('Nowe hasło jest za krótkie');
    }

    if (password !== verifyPw) {
      return setError('Nowe hasła nie są identyczne');
    }

    dispatch(changePassword(currentPassword, password));

    setCurrentPassword('');
    setPassword('');
    setVerifyPw('');
  };

  useEffect(() => {
    if (passwordState.isChanged) {
      onClose();
      dispatch(resetUserPasswordState());
    }
  }, [passwordState]);

  return (
    <Modal title='Zmiana hasła' onClose={onClose}>
      {passwordState.isLoading ? (
        <Loader />
      ) : (
        <StyledForm onSubmit={(e) => handlePasswordChange(e)}>
          <Input
            error={error}
            type='password'
            placeholder='Obecne hasło'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Input
            error={error}
            type='password'
            placeholder='Nowe hasło'
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
          {error && <ErrorMessage>{error}</ErrorMessage>}
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
