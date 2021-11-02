import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Utils
import api from '../../utils/api';

// Components
import { Col, Row } from '../../styles/GlobalStyle';
import Modal from '../Modal/Modal';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

// Styled Components
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFigure = styled.figure`
  margin-top: 2rem;
`;

const Separator = styled.div`
  position: relative;
  text-align: center;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.2rem;
    top: 50%;
    left: 0;
    display: block;
    background: ${({ theme }) => theme.gray[100]};
    transform: translateY(-50%);
  }
`;

const SeparatorText = styled.span`
  position: relative;
  padding: 0 1rem;
  color: ${({ theme }) => theme.gray[400]};
  background: #fff;
`;

const ValueInputWrapper = styled.div`
  position: relative;
  ${Input} {
    width: 100%;
  }
`;

const Sufix = styled.span`
  position: absolute;
  top: calc(50% - 0.1rem);
  right: 2rem;
  transform: translateY(-50%);
`;

const StyledInput = styled(Input)`
  text-align: right;
  padding-right: 5rem;
  line-height: 0;
`;

const PayLoanModal = ({ loanId, toPay, onClose }) => {
  const [value, setValue] = useState(toPay);
  const [redirect, setRedirect] = useState('');
  const [error, setError] = useState('');

  const handleInput = (e) => setValue(e.target.value);

  const handlePayButton = async () => {
    if (Number(value) > toPay) {
      return setError('Chcesz wpłacić za dużo');
    }

    const { data } = await api({
      url: '/loan/pay',
      method: 'PUT',
      data: {
        id: loanId,
        value: Number(value),
      },
    });

    setRedirect(data.redirectUri);
  };

  if (redirect) {
    return window.location.assign(redirect);
  }

  return (
    <Modal onClose={onClose} title='Spłać pożyczkę'>
      <Content>
        <p>Aby spłacić pożyczkę dokonaj wpłaty na poniższe konto bankowe</p>
        <StyledFigure>
          <Row>
            <Col>
              <Label>Nazwa</Label>
              <Input disabled value='Loando sp. z o.o.' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Ulica</Label>
              <Input disabled value='ul. Katowicka 61' />
            </Col>
            <Col>
              <Label>Kod pocztowy</Label>
              <Input disabled value='41-800' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Miasto</Label>
              <Input disabled value='Zabrze' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Numer konta</Label>
              <Input disabled value='75 9243 3475 3462 3645 5884 6924' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Tytuł przelewu</Label>
              <Input disabled value={`Spłata pożyczki ${loanId}`} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Separator>
                <SeparatorText>albo</SeparatorText>
              </Separator>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Kwota do wpłaty</Label>
              <ValueInputWrapper>
                <StyledInput placeholder='1900' value={value} onChange={handleInput} />
                <Sufix>PLN</Sufix>
              </ValueInputWrapper>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={handlePayButton}>Spłać przez PayU</Button>
            </Col>
          </Row>
        </StyledFigure>
      </Content>
    </Modal>
  );
};

PayLoanModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  loanId: PropTypes.string.isRequired,
  toPay: PropTypes.number.isRequired,
};

export default PayLoanModal;
