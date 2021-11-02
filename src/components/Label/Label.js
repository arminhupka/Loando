import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary[600]};
`;

export default Label;
