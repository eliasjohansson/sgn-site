import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../routes';
import Container from '../Container';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import Language from './Language';

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

  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      height: 100%;
      list-style: none;
      display: none;
      li {
        height: 100%;
        margin-left: 2rem;
        a {
          color: ${({ theme }) => theme.colorDarkGrey};
          text-decoration: none;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    nav {
      padding-right: 5rem;
      ul {
        display: flex;
      }
    }
  }
`;

const Navbar = props => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <StyledNavbar>
      <Container>
        <Logo />

        <nav>
          <Hamburger cross={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

          <ul>
            <li>
              <Link route="home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link route="branches">
                <a>Branches</a>
              </Link>
            </li>
            <li>
              <Link route="collaborations">
                <a>Collab</a>
              </Link>
            </li>
            <li>
              <Link route="news">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link route="donate">
                <a>Donate</a>
              </Link>
            </li>
            <li>
              <Link route="membership">
                <a>Membership</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>

      <Language>SWE</Language>
    </StyledNavbar>
  );
};

export default Navbar;
