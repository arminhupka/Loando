import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled(Link)`
  display: block;
  padding: 1.4rem 2.4rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.radius.regular};
  transition: color 0.3s, background 0.3s;

  :hover {
    background: ${({ theme }) => theme.primaryLight};
  }

  ${({ outline }) =>
    outline &&
    css`
      padding: 1.2rem 2.2rem;
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

export default LinkButton;
