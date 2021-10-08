import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Actions
import { getLoanDetails } from '../actions/loanActions';

// Components
import Heading from '../components/Heading/Heading';
import AccountLayout from '../layouts/AccountLayout';
import RangeInput from '../components/RangeInput/RangeInput';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';

const ProfileLoanPay = ({ match }) => {
  const dispatch = useDispatch();

  const { id } = match.params;
  const loanData = useSelector((state) => state.loanReducer.currentLoan);

  const [payValue, setPayValue] = useState(null);

  const handleRange = (e) => {
    setPayValue(Number(e.target.value));
  };

  useEffect(() => {
    setPayValue(loanData.data.toPay - loanData.data.paid);
    dispatch(getLoanDetails(id));
  }, []);

  if (!id) {
    return <Redirect to='/konto' />;
  }

  return (
    <AccountLayout>
      {loanData.isLoading ? (
        <Loader />
      ) : (
        <>
          <Heading title='Spłać pożyczkę' />
          <h2>{loanData.data._id}</h2>
          <h2>Masz do spłaty jeszcze</h2>
          <p>{loanData.data.toPay - loanData.data.paid} PLN</p>
          <h3>Spłacasz: {payValue} PLN</h3>
          <RangeInput max={loanData.data.toPay - loanData.data.paid} step={1} value={payValue} onChange={handleRange} />
          <Button full>Spłać</Button>
        </>
      )}
    </AccountLayout>
  );
};

ProfileLoanPay.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ProfileLoanPay;
