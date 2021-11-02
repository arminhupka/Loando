import styled, { css } from 'styled-components';

const TextArea = styled.textarea`
  position: relative;
  min-height: 20rem;
  padding: 1.4rem 2.4rem;
  background: #fff;
  border: 0.2rem solid ${({ theme }) => theme.gray[300]};
  border-radius: ${({ theme }) => theme.radius.regular};
  resize: vertical;

  :focus {
    border: 0.2rem solid ${({ theme }) => theme.primary};
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border: 0.2rem solid ${({ theme }) => theme.alert.error};
    `}
`;

export default TextArea;
