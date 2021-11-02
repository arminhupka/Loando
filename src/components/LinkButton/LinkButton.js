import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled(Link)`
  position: relative;
  display: block;
  padding: 1.4rem 2.4rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.radius.regular};
  transition: color 0.3s, background 0.3s;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: block;
    border-radius: ${({ theme }) => theme.radius.regular};
    box-shadow: 0 1rem 2rem ${({ theme }) => theme.primary};
    opacity: 0;
    transition: opacity 0.5s;
  }

  :hover {
    background: ${({ theme }) => theme.primaryLight};

    ::before {
      opacity: 0.2;
    }
  }

  ${({ outline }) =>
    outline &&
    css`
      padding: 1.2rem 2.2rem;
      color: ${({ theme }) => theme.primary};
      background: #fff;
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
