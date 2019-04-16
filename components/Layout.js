import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const StyledLayout = styled.div`
  main {
    padding-top: calc(64px);
    min-height: 75vh;
    position: relative;
  }
`;

const Layout = ({ children, lang }) => {
  return (
    <StyledLayout>
      <Navbar lang={lang} />

      <main>{children}</main>

      <Footer lang={lang} />
    </StyledLayout>
  );
};

export default Layout;
