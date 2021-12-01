import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// Icons
import { FaBars } from 'react-icons/fa';

// Utils
import devices from '../../utils/devices';

// Hooks
import useModalState from '../../hooks/useModalState';

// Components
import { Container } from '../../styles/GlobalStyle';
import Nav from './Nav/Nav';
import LinkButton from '../LinkButton/LinkButton';
import UserActionsNav from './Nav/UserActionsNav/UserActionsNav';
import AdminActionNav from './Nav/AdminActionNav/AdminActionNav';
import UserLink from './Nav/UserLink/UserLink';
import Branding from '../Branding/Branding';

// Styled Components
const StyledHeader = styled.header`
  height: 10rem;
  background: #fff;
  border-bottom: 0.1rem solid ${({ theme }) => theme.gray[300]};
  z-index: 2;

  ${({ fixed }) =>
    fixed &&
    css`
      @media screen and ${devices.lg} {
        position: absolute;
        width: 100%;
        top: 4rem;
        padding: 0 2.4rem;
        background: transparent;
        border: none;
      }
    `}
`;

const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    color: inherit;
  }

  @media screen and ${devices.lg} {
    justify-content: flex-start;
  }

  ${({ fixed }) =>
    fixed &&
    css`
      @media screen and ${devices.lg} {
        background: #fff;
        border-radius: ${({ theme }) => theme.radius.regular};
        box-shadow: ${({ theme }) => theme.shadow};
      }
    `}
`;

const ButtonsWrapper = styled.div`
  height: 100%;
  display: none;

  @media screen and ${devices.lg} {
    margin-left: auto;
    display: flex;
    align-items: center;

    ${LinkButton}:first-of-type {
      margin-right: 1rem;
    }

    :hover > div:last-of-type {
      //display: block;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  background: transparent;
  border: none;

  svg {
    font-size: 3rem;
  }

  @media screen and ${devices.lg} {
    display: none;
  }
`;

const Header = ({ fixed }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAdmin = useSelector((state) => state.userReducer.data?.isAdmin);

  const { isVisible, onToggle, onClose } = useModalState(false);

  const handleHamburger = () => onToggle();

  return (
    <StyledHeader fixed={fixed}>
      <StyledContainer fixed={fixed}>
        <Branding />
        <Nav isVisible={isVisible} onClose={onClose} />
        <ButtonsWrapper>
          {!isAuth ? (
            <>
              <LinkButton outline={1} to='/rejestracja'>
                Rejestracja
              </LinkButton>
              <LinkButton to='/zaloguj'>Logowanie</LinkButton>
            </>
          ) : (
            <>
              <UserLink />
              {!isAdmin && <UserActionsNav />}
              {isAdmin && <AdminActionNav />}
            </>
          )}
        </ButtonsWrapper>
        <HamburgerButton onClick={handleHamburger}>
          <FaBars />
        </HamburgerButton>
      </StyledContainer>
    </StyledHeader>
  );
};

Header.defaultProps = {
  fixed: false,
};

Header.propTypes = {
  fixed: PropTypes.bool,
};

export default Header;
