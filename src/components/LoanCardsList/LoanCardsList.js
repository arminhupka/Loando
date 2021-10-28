import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import LoanCard from './LoanCard/LoanCard';
import devices from '../../utils/devices';
// import LoansList from '../LoansList/LoansList';

// Styled Components
const CardsGrid = styled.div`\
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  gap: 2rem;
  
  @media screen and ${devices.md} {
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));

  }
`;

const LoanCardsList = ({ loans }) => {
  // eslint-disable-next-line no-unused-vars
  const [sortedLoans, setSortedLoans] = useState([]);

  const sortLoans = (loansArr) => {
    const sorted = loansArr.sort((a, b) => b.isActive - a.isActive);
    setSortedLoans(sorted);
  };

  useEffect(() => {
    sortLoans(loans);
  }, [loans]);

  return (
    <CardsGrid>
      {sortedLoans.map((loan) => (
        <LoanCard key={loan._id} data={loan} />
      ))}
    </CardsGrid>
  );
};

LoanCardsList.propTypes = {
  loans: PropTypes.instanceOf(Array).isRequired,
};

export default LoanCardsList;
