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
import InfoCards from '../components/Home/Projects/';
import Partners from '../components/Home/Partners';
import Contact from '../components/Home/Contact';
import LangNotFound from '../components/LangNotFound';
import LinkButton from '../components/LinkButton';

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

        if (loading) return null;

        console.log(data.page.info_cards);

        return (
          <StyledIndex>
            <>
              <Hero
                lang={lang}
                image={page.header.image}
                title={page.header.title}
                button={page.header.link_button}
              />

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
                <LinkButton
                  external
                  href={`/${lang}${
                    page.green_banner_1.link_button.link_type === 'Internal'
                      ? page.green_banner_1.link_button.internal_link
                      : page.green_banner_1.link_button.external_link
                  }`}
                >
                  {page.green_banner_1.link_button.label}
                </LinkButton>
              </Banner>

              <InfoCards data={page.info_cards} lang={lang} />

              <Awards title={page.awards.title} awards={page.awards.list} />

              <News infoBox={page.news_info_box} lang={lang} />

              <Banner primary>
                <h1>{page.green_banner_2.title}</h1>
                <LinkButton
                  external
                  href={`/${lang}${
                    page.green_banner_2.link_button.link_type === 'Internal'
                      ? page.green_banner_2.link_button.internal_link
                      : page.green_banner_2.link_button.external_link
                  }`}
                >
                  {page.green_banner_2.link_button.label}
                </LinkButton>
              </Banner>

              <Partners
                title={page.partners.title}
                partners={page.partners.list}
              />

              <Contact
                title={page.contact.title}
                text={page.contact.text}
                form={page.contact.form}
              />
            </>
          </StyledIndex>
        );
      }}
    </Query>
  );
};

export default Index;
