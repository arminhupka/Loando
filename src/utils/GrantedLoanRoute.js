import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const GrantedLoanRoute = ({ component: Component, ...rest }) => {
  const isGranted = useSelector((state) => state.loanReducer.newLoan.granted);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isGranted) {
          return <Component {...props} />;
        }
        return <Redirect to='/konto' />;
      }}
    />
  );
};

export default GrantedLoanRoute;
