import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import devices from '../../utils/devices';

// Actions
import { userRegister } from '../../actions/userActions';

// Componetns
import Input from '../Input/Input';
import Button from '../Button/Button';

// Styled Components
const StyledForm = styled.form``;

const Row = styled.div`
  margin: 0 -2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and ${devices.md} {
    flex-direction: row;
  }
`;

const Col = styled.div`
  flex: 1 0 50%;
  padding: 0 2rem;
  margin-bottom: 2rem;

  & > h2 {
    margin-bottom: 2rem;
  }

  :first-child {
    border-right: 0.1rem solid ${({ theme }) => theme.gray[300]};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1rem;
  }

  input:last-child {
    margin-bottom: 0;
  }
`;

const LoginInfoWrapper = styled.div`
  padding: 2rem 2rem;
  background: ${({ theme }) => theme.gray[100]};
  border-radius: ${({ theme }) => theme.radius.regular};

  h2 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const RegisterForm = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pesel, setPesel] = useState(null);
  const [idInfo, setIdInfo] = useState('');
  const [phone, setPhone] = useState(null);

  const [street, setStreet] = useState('');
  const [homeNumber, setHomeNumber] = useState(null);
  const [flatNumber, setFlatNumber] = useState(null);
  const [city, setCity] = useState(null);
  const [postalCode, setPostalCode] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // eslint-disable-next-line consistent-return
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(userRegister(email, password, firstName, lastName, pesel, street, city, postalCode));
  };

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
      case 'pesel': {
        setPesel(value);
        break;
      }
      case 'idInfo': {
        setIdInfo(value);
        break;
      }
      case 'phone': {
        setPhone(value);
        break;
      }
      case 'street': {
        setStreet(value);
        break;
      }
      case 'homeNumber': {
        setHomeNumber(value);
        break;
      }
      case 'flatNumber': {
        setFlatNumber(value);
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
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      case 'repeatPassword': {
        setRepeatPassword(value);
        break;
      }
      default: {
        return null;
      }
    }
  };

  if (userState.isLoading) {
    return <h1>Loading</h1>;
  }

  if (userState.data) {
    history.push('/konto');
  }

  return (
    <StyledForm onSubmit={handleForm}>
      <Row>
        <Col>
          <h2>Twoje dane</h2>
          <InputWrapper>
            <Input placeholder='Imię' name='firstName' value={firstName} onChange={handleInput} />
            <Input placeholder='Nazwisko' name='lastName' value={lastName} onChange={handleInput} />
            <Input placeholder='PESEL' name='pesel' value={pesel} onChange={handleInput} />
            <Input placeholder='Seria i numer dowodu osobistego' name='idInfo' value={idInfo} onChange={handleInput} />
            <Input placeholder='Numer telefonu' name='phone' value={phone} onChange={handleInput} />
          </InputWrapper>
        </Col>
        <Col>
          <h2>Dane adresowe</h2>
          <InputWrapper>
            <Input placeholder='Ulica' name='street' value={street} onChange={handleInput} />
            <Input placeholder='Numer domu' name='homeNumber' value={homeNumber} onChange={handleInput} />
            <Input placeholder='Numer lokalu' name='flatNumber' value={flatNumber} onChange={handleInput} />
            <Input placeholder='Miasto' name='city' value={city} onChange={handleInput} />
            <Input placeholder='Kod pocztowy' name='postalCode' value={postalCode} onChange={handleInput} />
          </InputWrapper>
        </Col>
        <Col>
          <LoginInfoWrapper>
            <h2>Dane do logowania</h2>
            <InputWrapper>
              <Input placeholder='Adres E-mail' name='email' value={email} onChange={handleInput} />
              <Input type='password' placeholder='Hasło' name='password' value={password} onChange={handleInput} />
              <Input
                type='password'
                placeholder='Potwórz hasło'
                name='repeatPassword'
                value={repeatPassword}
                onChange={handleInput}
              />
            </InputWrapper>
          </LoginInfoWrapper>
          <ButtonWrapper>
            <Button type='submit' full>
              Zarejestruj się
            </Button>
          </ButtonWrapper>
        </Col>
      </Row>
    </StyledForm>
  );
};

export default RegisterForm;
