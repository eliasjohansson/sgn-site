import React from 'react';
import styled from 'styled-components';

// Queries
import MEMBERSHIP_QUERY from '../graphql/membership.gql';

// Components
import MembershipForm from '../components/Forms/MembershipForm';
import HeaderImage from '../components/HeaderImage';
import Section from '../components/Section';
import { Query } from 'react-apollo';

const StyledMembership = styled.div``;

const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;

const Membership = props => {
  const { lang } = props;
  return (
    <Query query={MEMBERSHIP_QUERY} variables={{ lang: lang }}>
      {({ loading, error, data, fetchMore }) => {
        let page;

        if (!loading) {
          if (data.page.edges.length > 0) {
            page = data.page.edges[0].node.membership;
          } else {
            return <LangNotFound page="membership" />;
          }
        }

        if (loading) return <p>Loading</p>;

        return (
          <StyledMembership>
            <HeaderImage image={page.header.image} />
            <Header>
              <h1>{page.header.title}</h1>
              <p>{page.header.text}</p>
            </Header>
            <MembershipForm form={page.form} />
          </StyledMembership>
        );
      }}
    </Query>
  );
};

export default Membership;
