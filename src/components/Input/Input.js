import styled from 'styled-components';

const Input = styled.input`
  padding: 1rem;
  background: ${({ theme }) => theme.primary[50]};
  border: none;
`;

export default Input;
