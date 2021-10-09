import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Actions
import { getLoanDetails } from '../actions/loanActions';

// Components
import Loader from '../components/Loader/Loader';
import Heading from '../components/Heading/Heading';
import AccountLayout from '../layouts/AccountLayout';
import RangeInput from '../components/RangeInput/RangeInput';
// import RangeInput from '../components/RangeInput/RangeInput';
// import Button from '../components/Button/Button';

const ProfileLoanPay = ({ match }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  const loanData = useSelector((state) => state.loanReducer.currentLoan);

  const [valueToPay, setValueToPay] = useState(0);

  const handleRange = (e) => {
    setValueToPay(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(getLoanDetails(id));
  }, []);

  useEffect(() => {
    if (loanData.data) {
      setValueToPay(loanData.data.value - loanData.data.paid);
    }
  }, [loanData.data]);

  if (!id) {
    return <Redirect to='/konto' />;
  }

  return (
    <AccountLayout>
      <Heading title='Spłać pożyczkę' />
      {loanData.isLoading && <Loader />}
      {loanData.data && (
        <>
          <h1>{valueToPay}</h1>
          <RangeInput max={loanData.data.value - loanData.data.paid} value={valueToPay} step={1} onChange={handleRange} />
        </>
      )}
    </AccountLayout>
  );
};

ProfileLoanPay.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProfileLoanPay;
