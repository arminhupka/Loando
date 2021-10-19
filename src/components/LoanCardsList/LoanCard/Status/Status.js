import React from 'react';
import styled from 'styled-components';

// Styled Components
const StatusWrapper = styled.div`
  padding: 1rem 1.4rem;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  background: #f2f5fe;
  border-radius: ${({ theme }) => theme.radius.regular}; ;
`;

const StatusText = styled.span`
  font-size: 1.2rem;
`;

const DiodWrapper = styled.div`
  position: relative;
  margin-right: 1rem;
`;

const Diod = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  background: ${({ theme }) => theme.alert.success};
  border-radius: 50%;
`;

const DiodShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
  display: block;
  background: ${({ theme }) => theme.alert.success};
  filter: blur(2px);
`;

const Status = () => (
  <StatusWrapper>
    <DiodWrapper>
      <Diod />
      <DiodShadow />
    </DiodWrapper>
    <StatusText>Aktywna</StatusText>
  </StatusWrapper>
);

export default Status;
