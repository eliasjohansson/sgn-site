import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import qs from 'query-string';
import { Router } from '../routes';

// Queries
import HOME_QUERY from '../graphql/home.gql';

// Components
import BigSection from '../components/Home/BigSection';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Hero from '../components/Hero';
import News from '../components/Home/News';
import Awards from '../components/Home/Awards';
import Visions from '../components/Home/Visions';
import Projects from '../components/Home/Projects/';
import Partners from '../components/Home/Partners';
import Contact from '../components/Home/Contact';
import LangNotFound from '../components/LangNotFound';

const StyledIndex = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Index = props => {
  const { lang } = props;

  return (
    <Query query={HOME_QUERY} variables={{ lang: lang }}>
      {({ loading, error, data, fetchMore }) => {
        let page;

        if (!loading) {
          if (data.page.edges.length > 0) {
            page = data.page.edges[0].node.home;
          } else {
            return <LangNotFound page="home" />;
          }
        }

        if (loading) return <p>Loading</p>;

        return (
          <StyledIndex>
            <>
              <Hero image={page.header.image} />
              <BigSection image={page.card1.image}>
                <h1>{page.card1.title}</h1>
                <p>{page.card1.text}</p>
              </BigSection>
              <Banner>
                <i>“{page.quote}”.</i>
              </Banner>
              <BigSection reversed image={page.card2.image}>
                <h1>{page.card2.title}</h1>
                <p>{page.card2.text}</p>
              </BigSection>
              <Visions title={page.visions.title} visions={page.visions.list} />
              <Banner primary>
                <h1>{page.green_banner_1.title}</h1>
                <p>{page.green_banner_1.text}</p>
                <Button>CTA</Button>
              </Banner>
              <Projects lang={lang} />
              <Awards title={page.awards.title} awards={page.awards.list} />
              <News infoBox={{ title: '' }} news={[]} />
              <Banner primary>
                <h1>{page.green_banner_2.title}</h1>
                <Button>CTA</Button>
              </Banner>
              <Partners />
              <Contact />
            </>
          </StyledIndex>
        );
      }}
    </Query>
  );
};

export default Index;
