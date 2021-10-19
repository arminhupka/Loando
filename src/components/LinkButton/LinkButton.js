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
      color: ${({ theme }) => theme.primary};
      background: #fff;
      border: 0.2rem solid ${({ theme }) => theme.primary};

      :hover {
        background: #fff;
      }
    `}

  ${({ white }) => white && css``}
`;

export default LinkButton;
