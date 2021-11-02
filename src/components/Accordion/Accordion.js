import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import AccordionElement from './AccordionElement';

// Styled Components
const AccordionWrapper = styled.div``;

const Accordion = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const handleClick = (idx) => {
    if (current === idx) {
      return setCurrent(null);
    }

    setCurrent(idx);
  };

  return (
    <AccordionWrapper>
      {data.map((el, idx) => (
        <AccordionElement key={idx} title={el.title} onClick={() => handleClick(idx)} isActive={current === idx} />
      ))}
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  data: PropTypes.objectOf(Array).isRequired,
};

export default Accordion;
