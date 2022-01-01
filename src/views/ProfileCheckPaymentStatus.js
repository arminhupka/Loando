import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Actions
import { addAlert } from '../actions/alertActions';

// Utils
import api from '../utils/api';

// Components
import AccountLayout from '../layouts/AccountLayout';
import Heading from '../components/Heading/Heading';
import Loader from '../components/Loader/Loader';
import PaymentStatus from '../components/PaymentStatus/PaymentStatus';

const ProfileCheckPaymentStatus = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [statusData, setStatusData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getLoanStatus = async () => {
    try {
      setIsLoading(true);
      const { data } = await api({
        url: `/loan/pay/status/${id}`,
      });
      setIsLoading(false);
      setStatusData(data);
    } catch (err) {
      dispatch(addAlert('Wystąpił błąd podczas pobierania statusu płatności'));
    }
  };

  useEffect(() => {
    getLoanStatus();
    if (statusData === 'COMPLETED') return;
    const intervalId = setInterval(() => {}, 3000);
    getLoanStatus();
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <Helmet>
        <title>Status płatności | Loando</title>
      </Helmet>
      <AccountLayout>
        <Heading title='Status płatności' />
        {isLoading && <Loader />}
        {isLoading && statusData === 'PENDING' && <PaymentStatus status='pending' text='Oczekuje na potwierdzenie' />}
        {statusData === 'COMPLETED' && <PaymentStatus status='success' text='Wpłata potwierdzona' />}
        {statusData === 'CANCELED' && <PaymentStatus status='error' text='Wpłata anulowana' />}
      </AccountLayout>
    </>
  );
};

export default ProfileCheckPaymentStatus;
