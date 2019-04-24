import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

import GENERAL_INFO_QUERY from '../graphql/general-info.gql';
import { Query } from 'react-apollo';

const StyledLayout = styled.div`
  main {
    padding-top: calc(64px);
    min-height: calc(100vh);
    position: relative;
  }
`;

const Layout = ({ children, lang }) => {
  return (
    <Query query={GENERAL_INFO_QUERY} variables={{ lang: lang }}>
      {({ loading, error, data, fetchMore }) => {
        if (loading) return null;

        const navbar =
          data.generalInfo.edges.length > 0
            ? data.generalInfo.edges[0].node.acf.navbar
            : null;
        const footer =
          data.generalInfo.edges.length > 0
            ? data.generalInfo.edges[0].node.acf.footer
            : null;
        return (
          <StyledLayout>
            <Navbar data={navbar} lang={lang} />

            <main>{children}</main>

            <Footer data={footer} lang={lang} />
          </StyledLayout>
        );
      }}
    </Query>
  );
};

export default Layout;
