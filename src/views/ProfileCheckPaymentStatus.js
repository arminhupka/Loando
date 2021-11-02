import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

// Utils
import api from '../utils/api';

// Components
import AccountLayout from '../layouts/AccountLayout';

const ProfileCheckPaymentStatus = () => {
  const { id } = useParams();

  const [statusData, setStatusData] = useState('');

  const getLoanStatus = async () => {
    const { data } = await api({
      url: `/loan/pay/status/${id}`,
    });

    setStatusData(data);
  };

  useEffect(() => {
    getLoanStatus();
  }, []);

  return (
    <>
      <Helmet>
        <title>Status ostatniej płatności pożyczki | Loando</title>
      </Helmet>
      <AccountLayout>
        <h1>Status płatności</h1>
        <p>Status to {statusData}</p>
        <button type='button' onClick={getLoanStatus}>
          Refresh
        </button>
      </AccountLayout>
    </>
  );
};

export default ProfileCheckPaymentStatus;
