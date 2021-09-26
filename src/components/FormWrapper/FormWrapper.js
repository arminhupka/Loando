import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 55rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.primary[100]};
`;

const TitleWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Content = styled.div`
  padding: 2rem;
`;

const FormWrapper = ({ children, title }) => (
  <Wrapper>
    <TitleWrapper>
      <h1>{title}</h1>
    </TitleWrapper>
    <Content>{children}</Content>
  </Wrapper>
);

FormWrapper.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.string,
};

export default FormWrapper;
