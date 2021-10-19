import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  //max-width: 55rem;
  padding: 2rem;
  background: #fff;
  border: 0.1rem solid ${({ theme }) => theme.gray[300]};
  border-radius: ${({ theme }) => theme.radius.regular};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: Left;
`;

const Content = styled.div``;

const FormWrapper = ({ children, title }) => (
  <Wrapper>
    <TitleWrapper>
      <h2>{title}</h2>
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
