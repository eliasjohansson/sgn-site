import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Router } from '../routes';

// Queries
import COLLABORATIONS_QUERY from '../graphql/collaborations.gql';

// Components
import Collabs from '../components/Collaborations';
import HeaderImage from '../components/HeaderImage';
import Section from '../components/Section';
import Banner from '../components/Banner';
import Button from '../components/Button';
import { Query } from 'react-apollo';

const StyledCollaborations = styled.div`
  & h1 {
    margin: 0;
    margin-bottom: 5rem;
  }
`;
const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;

const Collaborations = props => {
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { lang } = props;

  if (process.browser && page === null && !isLoading) {
    lang.length == 2
      ? Router.replace('/404?error=lang&from=collaborations')
      : Router.replace('/404');
  }
  return (
    <StyledCollaborations>
      <Query query={COLLABORATIONS_QUERY} variables={{ lang: lang }}>
        {({ loading, error, data, fetchMore }) => {
          if (!loading) setIsLoading(false);

          if (data.page && data.page.edges.length > 0)
            setPage(data.page.edges[0].node.collaborations);

          if (isLoading || page === null) return null;

          return (
            <>
              <HeaderImage image={page.header.image} />
              <Header>
                <h1>Headline</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede.
                </p>
              </Header>
              <Collabs lang={lang} />
              <Banner primary>
                <h1>Title</h1>
                <Button>CTA</Button>
              </Banner>
            </>
          );
        }}
      </Query>
    </StyledCollaborations>
  );
};

export default Collaborations;
