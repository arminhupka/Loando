import React from 'react';
import PropTypes from 'prop-types';

// Style
import GlobalStyle from '../styles/GlobalStyle';

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <h1>HEADER</h1>
      {children}
      <h1>FOOTER</h1>
    </>
  );
};

MainLayout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.arrayOf(PropTypes.node),
};

export default MainLayout;
