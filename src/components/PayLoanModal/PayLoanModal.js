import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { Col, Row } from '../../styles/GlobalStyle';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

// Styled Components
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFigure = styled.figure`
  margin-top: 2rem;
`;

const PayLoanModal = ({ loanId, onClose }) => {
  return (
    <Modal onClose={onClose} title='Spłać pożyczkę'>
      <Content>
        <p>Aby spłacić pożyczkę dokonaj wpłaty na swoje konto bankowe</p>
        <StyledFigure>
          <Row>
            <Col>
              <Input disabled value='Loando sp. z o.o.' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input disabled value='ul. Katowicka 61' />
            </Col>
            <Col>
              <Input disabledt value='41-800' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input disabled value='Zabrze' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input disabled value='75 9243 3475 3462 3645 5884 6924' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input disabled value={`Spłata pożyczki ${loanId}`} />
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
};

export default PayLoanModal;
