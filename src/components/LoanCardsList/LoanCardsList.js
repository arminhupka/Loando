import React from 'react';
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

const LoanCardsList = ({ loans }) => (
  <CardsGrid>
    {loans.map((loan) => (
      <LoanCard key={loan._id} data={loan} />
    ))}
  </CardsGrid>
);

LoanCardsList.propTypes = {
  loans: PropTypes.instanceOf(Array).isRequired,
};

export default LoanCardsList;
