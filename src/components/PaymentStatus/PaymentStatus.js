import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components
const StatusWrapper = styled.div`
  display: block;
  padding: 2rem;
  line-height: 0;
  font-weight: 600;
  color: #fff;
  background: ${({ theme, status }) => {
    switch (status) {
      case 'success': {
        return theme.alert.success;
      }
      case 'error': {
        return theme.alert.error;
      }
      case 'pending': {
        return theme.primary;
      }
      default: {
        return null;
      }
    }
  }};
  border-radius: ${({ theme }) => theme.radius.regular};
`;

const PaymentStatus = ({ status, text }) => (
  <StatusWrapper status={status}>
    <h1>{text}</h1>
  </StatusWrapper>
);

PaymentStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default PaymentStatus;
