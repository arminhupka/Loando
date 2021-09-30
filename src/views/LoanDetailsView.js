import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getLoanDetails } from '../actions/loanActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';

const LoanDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  const loanDetails = useSelector((state) => state.loanReducer.currentLoan);

  useEffect(() => {
    dispatch(getLoanDetails(id));
  }, []);

  return (
    <>
      <Helmet>
        <title>Szczegóły pożyczki | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Szczegóły pożyczki' />
        {/* eslint-disable-next-line no-underscore-dangle */}
        {loanDetails.isLoading ? <h1>Ładowanie ...</h1> : <h1>{loanDetails.data?._id}</h1>}
      </AccountLayout>
    </>
  );
};

LoanDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default LoanDetails;
