import { useEffect, useState } from 'react';

// Utils
import api from '../utils/api';

const useLoanCalc = (amount, period) => {
  const [loanCost, setLoanCost] = useState('');
  const [loanCommission, setLoanCommission] = useState('');
  const [loanRRSO, setLoanRRSO] = useState('');
  const [loanInterest, setLoanInterest] = useState('');

  const getLoanData = async () => {
    try {
      const { data } = await api({
        url: '/loan/calculator',
        method: 'POST',
        data: {
          amount,
          period,
        },
      });
      setLoanCost(data.toRepaid);
      setLoanCommission(data.commissionAmount);
      setLoanRRSO(data.rrso);
      setLoanInterest(data.capitalInterest);
    } catch (err) {
      if (!err.response) {
        // eslint-disable-next-line no-console
        console.error('SERVER CONNECTION PROBLEM');
      }
    }
  };

  useEffect(() => {
    getLoanData();
  }, [amount, period]);

  return {
    loanCost,
    loanCommission,
    loanRRSO,
    loanInterest,
  };
};

export default useLoanCalc;
