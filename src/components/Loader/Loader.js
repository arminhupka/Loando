import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa';

// Components
import CenterWrapper from '../CenterWrapper/CenterWrapper';

// Styled Components
const RotateAnim = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  animation: ${RotateAnim} 2s infinite ease-in-out;

  svg {
    font-size: 15rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const Loader = () => (
  <CenterWrapper>
    <IconWrapper>
      <FaCircleNotch />
    </IconWrapper>
  </CenterWrapper>
);

export default Loader;
