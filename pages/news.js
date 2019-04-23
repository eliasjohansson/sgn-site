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

const StyledNews = styled.div``;
const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;
const News = props => {
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { lang } = props;

  if (process.browser && page === null && !isLoading) {
    lang.length == 2
      ? Router.replace('/404?error=lang&from=news')
      : Router.replace('/404');
  }
  return (
    <StyledNews>
      <Query query={NEWS_QUERY} variables={{ lang: lang }}>
        {({ loading, error, data, fetchMore }) => {
          if (!loading) setIsLoading(false);

          if (data.page && data.page.edges.length > 0)
            setPage(data.page.edges[0].node.news);

          if (isLoading || page === null) return null;

          console.log(page);
          return (
            <>
              <HeaderImage image={page.header.image} />
              <Header>
                <h1>{page.header.title}</h1>
                <p>{page.header.text}</p>
              </Header>
              <NewsComponent />
              <Banner primary>
                <h1>Title</h1>
                <Button>CTA</Button>
              </Banner>
            </>
          );
        }}
      </Query>
    </StyledNews>
  );
};

export default News;
