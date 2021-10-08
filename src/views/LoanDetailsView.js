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
import LoanDetails from '../components/LoanDetails/LoanDetails';
import Loader from '../components/Loader/Loader';

const LoanDetailsView = ({ match }) => {
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
        {loanDetails.isLoading ? <Loader /> : <>{loanDetails.data ? <LoanDetails data={loanDetails.data} /> : null}</>}
      </AccountLayout>
    </>
  );
};

LoanDetailsView.propTypes = {
  match: PropTypes.string.isRequired,
};

export default LoanDetailsView;
