import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Style
import GlobalStyle from '../styles/GlobalStyle';

// Components
import Header from '../components/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap' rel='stylesheet' />
      </Helmet>
      <GlobalStyle />
      <Header />
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
