import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions
import { userRegister } from '../../actions/userActions';

// Componetns
import FormWrapper from '../FormWrapper/FormWrapper';

// Styled Components
const StyledForm = styled.form``;

const RegisterForm = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [repeatedEmail, setRepeatedEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [pesel, setPesel] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // eslint-disable-next-line consistent-return
  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName': {
        setFirstName(value);
        break;
      }
      case 'lastName': {
        setLastName(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'repeatedEmail': {
        setRepeatedEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      case 'passwordConfirm': {
        setPasswordConfirm(value);
        break;
      }
      case 'pesel': {
        setPesel(value);
        break;
      }
      case 'street': {
        setStreet(value);
        break;
      }
      case 'city': {
        setCity(value);
        break;
      }
      case 'postalCode': {
        setPostalCode(value);
        break;
      }
      default: {
        return null;
      }
    }
  };

  // eslint-disable-next-line consistent-return
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(userRegister(email, password, firstName, lastName, pesel, street, city, postalCode));
  };

  if (userState.isLoading) {
    return <h1>Loading</h1>;
  }

  if (userState.data) {
    history.push('/konto');
  }

  return (
    <>
      <h1>Formularz rejestracyny</h1>
      <FormWrapper title='Rejestracja'>
        <StyledForm onSubmit={handleForm}>
          <input name='firstName' type='text' placeholder='Imię' value={firstName} onChange={handleInput} />
          <input name='lastName' type='text' placeholder='Nazwisko' value={lastName} onChange={handleInput} />
          <input name='email' type='text' placeholder='Adres email' value={email} onChange={handleInput} />
          <input name='repeatedEmail' type='text' placeholder='Powtórz email' value={repeatedEmail} onChange={handleInput} />
          <input name='password' type='text' placeholder='Hasło' value={password} onChange={handleInput} />
          <input name='passwordConfirm' type='text' placeholder='Powtórz hasło' value={passwordConfirm} onChange={handleInput} />
          <input name='pesel' type='text' placeholder='PESEL' value={pesel} onChange={handleInput} />
          <input name='street' type='text' placeholder='Ulica' value={street} onChange={handleInput} />
          <input name='city' type='text' placeholder='Miasto' value={city} onChange={handleInput} />
          <input name='postalCode' type='text' placeholder='Kod Pocztowy' value={postalCode} onChange={handleInput} />
          <button type='submit'>Zarejestruj</button>
        </StyledForm>
      </FormWrapper>
    </>
  );
};

export default RegisterForm;
