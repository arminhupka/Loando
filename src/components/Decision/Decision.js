import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const DecisionWrapper = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.primary[50]};
`;

const Decision = ({ granted }) => {
  if (granted === undefined) {
    return <h1>Loading</h1>;
  }

  if (!granted) {
    return (
      <DecisionWrapper>
        <h1>Nie możemy Ci obecenie przyznać pożyczki</h1>
      </DecisionWrapper>
    );
  }

  return (
    <DecisionWrapper>
      <h1>Tutaj powinna być decyzja</h1>
    </DecisionWrapper>
  );
};

Decision.propTypes = {
  granted: PropTypes.bool.isRequired,
};

export default Decision;
