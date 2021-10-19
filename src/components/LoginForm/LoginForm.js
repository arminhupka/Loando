import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Actions
import { userLogin } from '../../actions/userActions';

// Components
import FormWrapper from '../FormWrapper/FormWrapper';
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    setEmail('');
    setPassword('');
  };

  if (userState.isLoading) {
    return <Loader />;
  }

  if (userState.isAuth) {
    return <Redirect to='/konto' />;
  }

  return (
    <FormWrapper title='Zaloguj się'>
      <StyledForm onSubmit={handleFormSubmit}>
        <Input type='text' placeholder='Adres email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type='password' placeholder='Twoje hasło' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit'>Zaloguj</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default LoginForm;
