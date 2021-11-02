import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Actions
import { userLogout } from '../actions/userActions';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
  }, []);

  return <Redirect to='/' />;
};

export default Logout;
