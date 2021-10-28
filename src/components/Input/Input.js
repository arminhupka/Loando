import styled, { css } from 'styled-components';

const Input = styled.input`
  padding: 1.4rem 2.4rem;
  background: #fff;
  border: 0.2rem solid ${({ theme }) => theme.gray[300]};
  border-radius: ${({ theme }) => theme.radius.regular};

  &:focus {
    border: 0.2rem solid ${({ theme }) => theme.primary};
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border: 0.2rem solid ${({ theme }) => theme.alert.error};
    `}
`;

export default Input;
