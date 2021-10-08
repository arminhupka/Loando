import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { changePassword } from '../actions/userActions';
import { addAlert, resetAlerts } from '../actions/alertActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import Alert from '../components/Alert/Alert';

// Styled Components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;
  }
`;

const ProfileChangePassword = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.userReducer);
  const alertsState = useSelector((state) => state.alertReducer);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'currentPassword': {
        setCurrentPassword(value);
        break;
      }
      case 'newPassword': {
        setNewPassword(value);
        break;
      }
      case 'confirmNewPassword': {
        setConfirmNewPassword(value);
        break;
      }
      default: {
        return null;
      }
    }

    return null;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      dispatch(addAlert('Uzuepłnij wszystkie pola', 'warning'));
      return;
    }

    if (newPassword !== confirmNewPassword) {
      dispatch(addAlert('Nowe hasła nie są identyczne', 'warning'));
      return;
    }

    dispatch(changePassword(currentPassword, newPassword));
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  useEffect(() => {
    return () => {
      dispatch(resetAlerts());
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Zmień hasło | Loando</title>
      </Helmet>
      <AccountLayout>
        {alertsState.map((alert, index) => (
          <Alert message={alert.message} type={alert.type} idx={index} />
        ))}
        <Heading title='Zmień hasło' />
        {userState.isLoading ? (
          <Loader />
        ) : (
          <StyledForm onSubmit={handleForm}>
            <Input
              placeholder='Obecne hasło'
              type='password'
              name='currentPassword'
              value={currentPassword}
              onChange={handleInput}
            />
            <Input placeholder='Nowe hasło' type='password' name='newPassword' value={newPassword} onChange={handleInput} />
            <Input
              placeholder='Powtórz nowe hasło'
              type='password'
              name='confirmNewPassword'
              value={confirmNewPassword}
              onChange={handleInput}
            />
            <Button type='submit'>Zmień hasło</Button>
          </StyledForm>
        )}
      </AccountLayout>
    </>
  );
};

export default ProfileChangePassword;
