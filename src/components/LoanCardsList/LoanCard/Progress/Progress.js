import React from 'react';
import styled from 'styled-components';

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
  z-index: 0;
`;

const ProgressFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: ${({ theme }) => theme.primary};
  z-index: 2;
`;

const Progress = () => (
  <ProgressWrapper>
    <ProgressFill />
    <ProgressBody />
  </ProgressWrapper>
);

export default Progress;
