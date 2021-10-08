import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const isAuth = localStorage.getItem('token');
  const isAuth = useSelector((state) => state.userReducer.isAuth) || localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        }
        return <Redirect to='/zaloguj' />;
      }}
    />
  );
};

export default PrivateRoute;
