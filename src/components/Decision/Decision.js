import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FaCheckCircle, FaMinusCircle } from 'react-icons/all';
import devices from '../../utils/devices';

// Styled Components
const DecisionWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background: ${({ theme }) => theme.alert.error};
  border-radius: ${({ theme }) => theme.radius.regular};

  svg {
    font-size: 8rem;
    margin-bottom: 2rem;
  }

  ${({ success }) =>
    success &&
    css`
      background: ${({ theme }) => theme.alert.success};
    `}

  @media screen and ${devices.lg} {
    svg {
      margin-bottom: 0;
      margin-right: 2rem;
    }

    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const IconWrapper = styled.div``;

const TextWrapper = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  @media screen and ${devices.lg} {
    text-align: left;
  }
`;

const Decision = ({ success }) => {
  if (success) {
    return (
      <DecisionWrapper success={success}>
        <IconWrapper>
          <FaCheckCircle />
        </IconWrapper>
        <TextWrapper>
          <h2>Pożyczka została przyznana</h2>
          <p>Kwota pożyczki zostanie za chwilę przekazana do wypłaty na Twoje konto</p>
        </TextWrapper>
      </DecisionWrapper>
    );
  }

  return (
    <DecisionWrapper success={success}>
      <IconWrapper>
        <FaMinusCircle />
      </IconWrapper>
      <TextWrapper>
        <h2>Wniosek odrzucony</h2>
        <p>Niestety nie jesteśmy w stanie udzielić ci pożyczki</p>
      </TextWrapper>
    </DecisionWrapper>
  );
};

Decision.defaultProps = {
  success: false,
};

Decision.propTypes = {
  success: PropTypes.bool,
};

export default Decision;
