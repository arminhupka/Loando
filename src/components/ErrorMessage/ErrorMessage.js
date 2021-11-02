import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const Message = styled.span`
  display: block;
  margin: 2rem 0;
  line-height: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.alert.error};
`;

const ErrorMessage = ({ children }) => <Message>{children}</Message>;

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMessage;
