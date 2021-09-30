import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { resetNewLoan } from '../actions/loanActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import Decision from '../components/Decision/Decision';

const ProfileLoansView = () => {
  const dispatch = useDispatch();

  const decisionState = useSelector((state) => state.loanReducer.newLoan.granted);

  useEffect(() => {
    return () => dispatch(resetNewLoan());
  }, []);

  return (
    <>
      <Helmet>
        <title>Decyzja | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Decyzja' />
        <Decision granted={decisionState} />
      </AccountLayout>
    </>
  );
};

export default ProfileLoansView;
