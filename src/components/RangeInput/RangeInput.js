import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RangeInputWrapper = styled.div`
  position: relative;
  padding: 1rem 0;
`;

const Ruler = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Line = styled.span`
  height: 100%;
  width: 0.1rem;
  background: ${({ theme }) => theme.primaryDark};

  &:nth-child(even) {
    height: 75%;
  }
`;

const Input = styled.input.attrs({ type: 'range' })`
  position: relative;
  -webkit-appearance: none;
  padding: 1rem 0;
  width: 100%;
  background: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    display: block;
    width: 2rem;
    height: 2rem;
    //background: ${({ theme }) => theme.primaryDark};
    background: #fff;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow};
  }

  ::-webkit-slider-container {
    height: 0.4rem;
    background: ${({ theme }) => theme.primaryDark};
  }

  ::-ms-track {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
  }
`;

const RangeInput = ({ ruler, ...props }) => {
  const lines = props.max / props.step;

  const generateLines = () => {
    const elements = [];
    for (let i = 0; i < lines; i += 1) {
      elements.push(<Line />);
    }
    return elements;
  };

  return (
    <RangeInputWrapper>
      {ruler && (
        <Ruler>
          {generateLines().map((line, idx) => (
            <span key={idx}>{line}</span>
          ))}
        </Ruler>
      )}
      <Input {...props} />
    </RangeInputWrapper>
  );
};

RangeInput.defaultProps = {
  ruler: false,
};

RangeInput.propTypes = {
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  ruler: PropTypes.bool,
};

export default RangeInput;
