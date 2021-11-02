import React from 'react';
import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ElementWrapper = styled.div`
  border-top: 0.2rem solid ${({ theme }) => theme.gray[300]};
`;

const AccordionHeading = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeadingText = styled.span`
  font-weight: 600;
`;

const AccordionBody = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      max-height: 10rem;
    `}
`;

const TextWrapper = styled.div`
  padding: 0 2rem 2rem;
`;

const StyledButton = styled.button`
  padding: 1rem;
  background: transparent;
  border: none;
  transition: transform 0.2s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;

const AccordionElement = ({ title, isActive, onClick }) => {
  return (
    <ElementWrapper>
      <AccordionHeading>
        <HeadingText>{title}</HeadingText>
        <StyledButton isActive={isActive} onClick={onClick}>
          <FaChevronDown />
        </StyledButton>
      </AccordionHeading>
      <AccordionBody isActive={isActive}>
        <TextWrapper>
          <p>
            Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse
            iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper
            ullamcorper class ad consectetur tristique et.
          </p>
        </TextWrapper>
      </AccordionBody>
    </ElementWrapper>
  );
};

AccordionElement.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AccordionElement;
