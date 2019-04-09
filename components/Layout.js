import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const StyledLayout = styled.div`
  main {
    min-height: 75vh;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </StyledLayout>
  );
};

export default Layout;
