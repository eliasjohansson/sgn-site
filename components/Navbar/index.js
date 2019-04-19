import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../routes';
import { Query } from 'react-apollo';

// Queries
import LANGUAGES_QUERY from '../../graphql/languages.gql';

// Components
import Container from '../Container';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import { DesktopLang } from './Language';
import Menu from './Menu';

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  background-color: ${({ theme }) => theme.colorWhite};
  z-index: 100;

  > ${Container} {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navbar = ({ open, lang }) => {
  const [menuOpen, setMenuOpen] = useState(open || false);
  return (
    <StyledNavbar>
      <Query query={LANGUAGES_QUERY}>
        {({ loading, error, data, fetchMore }) => {
          const { languages } = data;
          return (
            <>
              <Container>
                <Logo />

                <Hamburger
                  cross={menuOpen}
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                <Menu
                  open={menuOpen}
                  close={() => setMenuOpen(false)}
                  lang={lang}
                  languages={languages}
                />
              </Container>
              <DesktopLang lang={lang} languages={languages} />
            </>
          );
        }}
      </Query>
    </StyledNavbar>
  );
};

export default Navbar;
