import App, { Container } from 'next/app';
import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import withApolloClient from '../lib/withApolloClient';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import dotenv from 'dotenv';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Layout from '../components/Layout';

dotenv.config();

class MyApp extends App {
  render() {
    let { lang } = this.props.router.query;
    lang = lang ? lang.toUpperCase() : 'EN';
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ThemeProvider theme={Theme}>
          <>
            <Normalize />
            <GlobalStyles />

            <ApolloProvider client={apolloClient}>
              <Layout>
                <Component {...pageProps} lang={lang} />
              </Layout>
            </ApolloProvider>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(withApolloClient(MyApp));
