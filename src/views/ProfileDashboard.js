import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getLoansList } from '../actions/loanActions';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Heading from '../components/Heading/Heading';
import Loader from '../components/Loader/Loader';

const ProfileDashboard = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.userReducer.data);
  const loansList = useSelector(() => useSelector((state) => state.loanReducer.loans));

  const [activeLoans, setActiveLoans] = useState([]);

  useEffect(() => {
    dispatch(getLoansList());
    setActiveLoans(loansList.data.filter((loan) => loan.isActive));
  }, []);

  return (
    <>
      <Helmet>
        <title>Twoje konto | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Twoje konto' />
        {!userState && <Loader />}
        {userState && (
          <>
            <h1>Witaj {userState.firstName}</h1>
            <p>Masz aktualnie {activeLoans.length} pożyczki do spłaty</p>
          </>
        )}
      </AccountLayout>
    </>
  );
};

export default ProfileDashboard;
