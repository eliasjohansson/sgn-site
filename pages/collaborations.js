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
  const { lang } = props;

  return (
    <Query query={COLLABORATIONS_QUERY} variables={{ lang: lang }}>
      {({ loading, error, data, fetchMore }) => {
        let page;

        if (!loading) {
          if (data && data.page.edges.length > 0) {
            page = data.page.edges[0].node.collaborations;
          } else {
            return <LangNotFound page="collaborations" />;
          }
        }

        if (loading) return <p>Loading</p>;

        return (
          <StyledCollaborations>
            <HeaderImage image={page.header.image} />
            <Header>
              <h1>Headline</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </p>
            </Header>
            <Collabs lang={lang} />
            <Banner primary>
              <h1>Title</h1>
              <Button>CTA</Button>
            </Banner>
          </StyledCollaborations>
        );
      }}
    </Query>
  );
};

export default Collaborations;
