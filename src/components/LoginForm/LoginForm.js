import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// Actions
import { userLogin } from '../../actions/userActions';

// Components
import FormWrapper from '../FormWrapper/FormWrapper';
import Button from '../Button/Button';
import Input from '../Input/Input';

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
  // const userState = useSelector((state) => state.userReducer);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrapper title='Zaloguj się'>
      <StyledForm onSubmit={handleFormSubmit}>
        <Input
          type='text'
          name='email'
          placeholder='Adres email'
          value={email}
          autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          name='password'
          placeholder='Twoje hasło'
          value={password}
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit'>Zaloguj</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default LoginForm;
