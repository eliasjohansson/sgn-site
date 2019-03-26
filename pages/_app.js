import App, { Container } from 'next/app';
import React from 'react';
import withApolloClient from '../lib/withApolloClient';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import dotenv from 'dotenv';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';

dotenv.config();

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ThemeProvider theme={Theme}>
          <>
            <Normalize />
            <GlobalStyles />

            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
