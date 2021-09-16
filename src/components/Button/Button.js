import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  padding: 1rem 2rem;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary};
  border: none;
  transition: background 0.3s;

  &::before {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s, visibility 1s;
  }

  &:hover {
    background: ${({ theme }) => theme.primaryLight};

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0.5rem;
      left: 0;
      display: block;
      background: ${({ theme }) => theme.primaryLight};
      opacity: 0.2;
      visibility: visible;
      filter: blur(3px);
      z-index: -1;
    }
  }
`;

export default Button;
