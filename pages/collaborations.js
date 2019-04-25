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
import LinkButton from '../components/LinkButton';
import LangNotFound from '../components/LangNotFound';

const StyledCollaborations = styled.div`
  & h1 {
    margin: 0;
    margin-bottom: 2rem;
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
          if (data.page.edges.length > 0) {
            page = data.page.edges[0].node.collaborations;
          } else {
            return <LangNotFound page="collaborations" />;
          }
        }

        if (loading) return null;

        return (
          <StyledCollaborations>
            <HeaderImage image={page.header.image} />
            <Header>
              <h1>{page.header.title}</h1>
              <p>{page.header.text}</p>
            </Header>
            <Collabs
              title={page.projects_title}
              collabs={data.collaborations.edges}
              lang={lang}
            />
            <Banner primary>
              <h1>{page.green_banner.title}</h1>
              <LinkButton
                external
                href={`/${lang}${
                  page.green_banner.link_button.link_type === 'Internal'
                    ? page.green_banner.link_button.internal_link
                    : page.green_banner.link_button.external_link
                }`}
              >
                {page.green_banner.link_button.label}
              </LinkButton>
            </Banner>
          </StyledCollaborations>
        );
      }}
    </Query>
  );
};

export default Collaborations;
