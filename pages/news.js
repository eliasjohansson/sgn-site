import { Query } from 'react-apollo';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import qs from 'query-string';
import React, { useState } from 'react';
import styled from 'styled-components';

// Queries
import NEWS_QUERY from '../graphql/news.gql';

// Components
import HeaderImage from '../components/HeaderImage';
import Section from '../components/Section';
import Banner from '../components/Banner';
import Button from '../components/Button';
import NewsComponent from '../components/NewsComponent';
import LangNotFound from '../components/LangNotFound';

const StyledNews = styled.div``;
const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
  p {
    padding-bottom: 2rem;
    max-width: 800px;
  }
`;
const News = props => {
  const { lang } = props;

  return (
    <Query query={NEWS_QUERY} variables={{ lang: lang }}>
      {({ loading, error, data, fetchMore }) => {
        let page;

        if (!loading) {
          if (data.page.edges.length > 0) {
            page = data.page.edges[0].node.news;
          } else {
            return <LangNotFound page="news" />;
          }
        }

        if (loading) return null;

        return (
          <StyledNews>
            <HeaderImage image={page.header.image} />
            <Header>
              <h1>{page.header.title}</h1>
              <p>{page.header.text}</p>
            </Header>
            <NewsComponent />
          </StyledNews>
        );
      }}
    </Query>
  );
};

export default News;
