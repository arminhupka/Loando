import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components
const ProgressWrapper = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.regular};
  overflow: hidden;
`;

const ProgressBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gray[300]};
`;

const ProgressFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ percent }) => `${percent}%`};
  height: 100%;
  background: ${({ theme }) => theme.primary};
  z-index: 1;
`;

const Progress = ({ percent }) => (
  <ProgressWrapper>
    <ProgressFill percent={percent} />
    <ProgressBody />
  </ProgressWrapper>
);

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default Progress;
