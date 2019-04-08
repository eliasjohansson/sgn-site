import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../routes';
import Container from '../Container';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import DesktopLanguage from './Language';
import Menu from './Menu';

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.colorWhite};

  > ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navbar = props => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <StyledNavbar>
      <Container>
        <Logo />

        <Hamburger cross={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        <Menu open={menuOpen} />
      </Container>
      <DesktopLanguage>English</DesktopLanguage>
    </StyledNavbar>
  );
};

export default Navbar;
