import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const CenterDiv = styled.div`
  flex: 1;
  padding: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CenterWrapper = ({ children }) => <CenterDiv>{children}</CenterDiv>;

CenterWrapper.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

export default CenterWrapper;
