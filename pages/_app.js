import App, { Container } from 'next/app';
import Link from 'next/link';
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
              <nav>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/branches">
                  <a>Branches</a>
                </Link>
                <Link href="/collaborations">
                  <a>Collaborations</a>
                </Link>
                <Link href="/news">
                  <a>News</a>
                </Link>
                <Link href="/membership">
                  <a>Membership</a>
                </Link>
                <Link href="/donations">
                  <a>Donations</a>
                </Link>
                <Link as="/branch/1337" href="/branch?id=1337">
                  <a>Branch 1337</a>
                </Link>
              </nav>

              <Component {...pageProps} />
            </ApolloProvider>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
