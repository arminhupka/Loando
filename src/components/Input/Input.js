import styled from 'styled-components';

const Input = styled.input`
  padding: 1.5rem 2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.primary[50]};
  border: none;
`;

export default Input;
