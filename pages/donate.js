import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

// QUERIES
import DONATE_QUERY from '../graphql/donate.gql';

// Components
import HeaderImage from '../components/HeaderImage';
import Section from '../components/Section';
import Banner from '../components/Banner';
import Button from '../components/Button';
import H1 from '../components/H1';
import Donate from '../components/Donate';
import LinkButton from '../components/LinkButton';
import LangNotFound from '../components/LangNotFound';

const StyledDonations = styled.div``;

const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;
const Donations = props => {
  const { lang } = props;
  return (
    <Query query={DONATE_QUERY} variables={{ lang: lang }}>
      {({ loading, error, data, fetchMore }) => {
        let page;

        if (!loading) {
          if (data.page.edges.length > 0) {
            page = data.page.edges[0].node.donate;
          } else {
            return <LangNotFound page="donate" />;
          }
        }

        if (loading) return null;

        return (
          <StyledDonations>
            <HeaderImage image={page.header.image} />
            <Header>
              <h1>{page.header.title}</h1>
              <p>{page.header.text}</p>
            </Header>
            <Donate
              lang={lang}
              collaborateCard={page.collaborate_card}
              donateCard={page.donate_card}
            />
            <Banner primary>
              <H1 withExclamation>{page.member_banner.title}</H1>
              <LinkButton external href={`/${lang}/membership`}>
                {page.member_banner.button_label}
              </LinkButton>
            </Banner>
          </StyledDonations>
        );
      }}
    </Query>
  );
};

export default Donations;
