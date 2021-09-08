import React from 'react';
import PropTypes from 'prop-types';

const FormWrapper = ({ children, title }) => (
  <div>
    <div>
      <h1>{title}</h1>
    </div>
    {children}
  </div>
);

FormWrapper.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.string,
};

export default FormWrapper;
