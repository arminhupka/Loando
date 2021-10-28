import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
  background: ${({ theme }) => theme.alert.error};
  border-radius: 50%;
  z-index: 1;

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.alert.success};
    `}
`;

const DiodShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
  display: block;
  background: ${({ theme }) => theme.alert.error};
  filter: blur(2px);
  z-index: 0;

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.alert.success};
    `}
`;

const Status = ({ isActive }) => (
  <StatusWrapper>
    <DiodWrapper>
      <Diod active={isActive} />
      <DiodShadow active={isActive} />
    </DiodWrapper>
    {isActive ? <StatusText>Aktywna</StatusText> : <StatusText>Zamknięta</StatusText>}
  </StatusWrapper>
);

Status.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Status;
