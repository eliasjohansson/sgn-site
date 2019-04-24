import App, { Container } from "next/app";
import { withRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import withApolloClient from "../lib/withApolloClient";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import dotenv from "dotenv";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import Layout from "../components/Layout";

dotenv.config();
class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    let { lang } = this.props.router.query;
    lang = lang ? lang : "en";

    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700"
          />
        </Head>
        <ThemeProvider theme={Theme}>
          <>
            <Normalize />
            <GlobalStyles />

            <ApolloProvider client={apolloClient}>
              <Layout lang={lang}>
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
