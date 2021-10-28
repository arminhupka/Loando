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
  background: #fff;
  opacity: 0.5;

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
    position: relative;
    display: block;
    width: 2rem;
    height: 2rem;
    background: ${({ theme }) => theme.primary};
    border: 0.2rem solid #fff;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadow};
  }

  ::-webkit-slider-container {
    height: 1rem;
    background: ${({ theme }) => theme.primaryDark};
    border-radius: ${({ theme }) => theme.radius.regular};
  }

  ::-ms-track {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
  }
`;

const RangeInput = ({ ruler, ...props }) => {
  const lines = props.max / props.step;
  const linesElementsCounter = [];

  const generateLines = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < lines; i++) {
      linesElementsCounter.push(i);
    }
  };

  generateLines();

  return (
    <RangeInputWrapper>
      {ruler && (
        <Ruler>
          {linesElementsCounter.map((line) => (
            <Line key={line} />
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
