import { Query } from "react-apollo";
import { withRouter } from "next/router";
import gql from "graphql-tag";
import qs from "query-string";
import React from "react";
import styled from "styled-components";

// Queries
import NEWS_QUERY from "../graphql/news.gql";

// Components
import HeaderImage from "../components/HeaderImage";
import Section from "../components/Section";
import Banner from "../components/Banner";
import Button from "../components/Button";
import NewsComponent from "../components/NewsComponent";

const StyledNews = styled.div``;
const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;
const News = props => {
  const { lang } = props;
  return (
    <StyledNews>
      <Query query={NEWS_QUERY} variables={{ lang: lang }}>
        {({ loading, error, data, fetchMore }) => {
          let page;
          if (!loading) {
            page = data.page.edges[0].node.news;
          }
          console.log(page);
          const { header } = page;
          return (
            <>
              <HeaderImage image={header.image} />
              <Header>
                <h1>{header.title}</h1>
                <p>{header.text}</p>
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
