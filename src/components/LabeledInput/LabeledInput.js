import React from 'react';
import PropTypes from 'prop-types';

const LabeledInput = ({ title }) => (
  <div>
    <label htmlFor={title.toLowerCase()}>{title}</label>
    <input id={title.toLowerCase()} name={title.toLowerCase()} type='text' />
  </div>
);

LabeledInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LabeledInput;
