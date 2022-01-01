import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

// Utils
import api from '../utils/api';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Heading from '../components/Heading/Heading';

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
    if (statusData === 'COMPLETED') return;
    const intervalId = setInterval(() => {
      getLoanStatus();
    }, 1000);

    return () => intervalId.clearInterval();
  }, []);

  return (
    <>
      <Helmet>
        <title>Status płatności | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Status płatności' />
        <p>Status to {statusData}</p>
        <button type='button' onClick={getLoanStatus}>
          Refresh
        </button>
      </AccountLayout>
    </>
  );
};

export default ProfileCheckPaymentStatus;
