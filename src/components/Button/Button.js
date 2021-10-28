import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  position: relative;
  padding: 1.4rem 2.4rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radius.regular};
  transition: color 0.3s, background 0.3s;

  :hover {
    background: ${({ theme }) => theme.primaryLight};
  }

  ${({ outline }) =>
    outline &&
    css`
      color: ${({ theme }) => theme.primary};
      background: transparent;
      border: 0.2rem solid ${({ theme }) => theme.primary};

      :hover {
        color: #fff;
        background: ${({ theme }) => theme.primary};
      }
    `}

  ${({ white }) =>
    white &&
    css`
      color: #fff;
      border-color: #fff;
    `}

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`;

export default Button;
