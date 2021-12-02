import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/all';

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 0 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 4;
`;

const ModalWrapper = styled.div`
  width: 100%;
  max-width: 65rem;
  //max-height: 55rem;
  padding: 2rem;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ModalBody = styled.div``;

const ModalHeader = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2``;

const StyledButton = styled.button`
  display: flex;
  font-size: 2rem;
  background: transparent;
  border: none;
`;

const Modal = ({ title, children, onClose }) => {
  const handleModalClose = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleModalClose);

    return () => window.addEventListener('keyup', handleModalClose);
  }, []);

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalHeader>
          <Title>{title}</Title>
          <StyledButton onClick={onClose}>
            <FaTimes />
          </StyledButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
