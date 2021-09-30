import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const Wrapper = styled.div`
  position: relative;
  background: red;
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 0;
  top: 50%;
  padding: 0 0.5rem;
  background: #fff;
  transform: translate(0.5rem, -50%);
  z-index: 1;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 1rem;
  :focus,
  :valid ~ ${StyledLabel} {
    display: none;
  }
`;

const LabeledInput = ({ title }) => {
  return (
    <Wrapper>
      <StyledInput id={title.toLowerCase()} name={title.toLowerCase()} type='text' />
      <StyledLabel htmlFor={title.toLowerCase()}>{title}</StyledLabel>
    </Wrapper>
  );
};

LabeledInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LabeledInput;
