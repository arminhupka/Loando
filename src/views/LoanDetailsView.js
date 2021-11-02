import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Hooks
import useModalState from '../hooks/useModalState';

// Actions
import { getLoanDetails } from '../actions/loanActions';

// Layout
import AccountLayout from '../layouts/AccountLayout';

// Components
import Heading from '../components/Heading/Heading';
import LoanDetails from '../components/LoanDetails/LoanDetails';
import Loader from '../components/Loader/Loader';
import PayLoanModal from '../components/PayLoanModal/PayLoanModal';

const LoanDetailsView = ({ match }) => {
  const dispatch = useDispatch();
  const { isVisible, onClose, onOpen } = useModalState(false);

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
        {isVisible && <PayLoanModal loanId={loanDetails.data._id} toPay={loanDetails.data.toPay} onClose={onClose} />}
        <Heading title='Szczegóły pożyczki' />
        {loanDetails.isLoading ? (
          <Loader />
        ) : (
          <>{loanDetails.data ? <LoanDetails data={loanDetails.data} onOpenModal={onOpen} /> : null}</>
        )}
      </AccountLayout>
    </>
  );
};

LoanDetailsView.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default LoanDetailsView;
