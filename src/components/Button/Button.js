import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem 2rem;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary};
  border: none;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primaryLight};
  }
`;

export default Button;
