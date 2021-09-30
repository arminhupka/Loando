import styled, { css } from 'styled-components';

// TODO add different style

const Button = styled.button`
  position: relative;
  padding: 1.5rem 2rem;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary[400]};
  border: none;
  border-radius: ${({ theme }) => theme.radius.regular};
  transition: color 0.3s, background 0.3s;

  &::before {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s, visibility 1s;
  }

  &:hover {
    background: ${({ theme }) => theme.primary[300]};
  }

  ${({ alt }) =>
    alt &&
    css`
      color: ${({ theme }) => theme.primary[400]};
      background: #fff;

      &:hover {
        color: #fff;
        background: ${({ theme }) => theme.primary[100]};
      }
    `}
`;

export default Button;
