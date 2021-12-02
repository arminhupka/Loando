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
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gray[300]};
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 3rem;
  text-align: center;
  line-height: 3rem;

  :first-child {
    color: #fff;
    background: ${({ theme }) => theme.primary};
    z-index: 1;
    clip-path: ${({ percent }) => `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0% 100%)`};
  }

  :last-child {
    color: ${({ theme }) => theme.primary};
  }
`;

const Progress = ({ percent }) => (
  <ProgressWrapper>
    <ProgressBody>
      <Text percent={percent}>Pozostało 30 dni</Text>
      <Text>Pozostało 30 dni</Text>
    </ProgressBody>
  </ProgressWrapper>
);

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default Progress;
