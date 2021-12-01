import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import devices from '../../utils/devices';

// Styled Components
const AlertWrapper = styled.div`
  position: fixed;
  max-width: 90%;
  width: 100%;
  bottom: 5rem;
  left: 50%;
  padding: 1.4rem 2.4rem;
  display: block;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background: red;
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};
  transform: translateX(-50%);
  z-index: 20;

  @media screen and ${devices.lg} {
    max-width: 50rem;
  }

  ${({ type }) => {
    switch (type) {
      case 'success': {
        return (
          type &&
          css`
            background: green;
          `
        );
      }
      case 'warning': {
        return (
          type &&
          css`
            background: orange;
          `
        );
      }
      case 'error': {
        return (
          type &&
          css`
            background: ${({ theme }) => theme.alert.error};
          `
        );
      }
      default: {
        return (
          type &&
          css`
            background: pink;
          `
        );
      }
    }
  }}
`;

const Alert = ({ message, type, idx }) => {
  return (
    <AlertWrapper type={type} position={idx}>
      <span>{message}</span>
    </AlertWrapper>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Alert;
