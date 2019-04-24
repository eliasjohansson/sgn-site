import React, { useState } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// Queries
import BRANCHES_QUERY from "../graphql/branches.gql";

// Components
import Container from "../components/Container";
import ContactInfo from "../components/ContactInfo";
import SelectedBranch from "../components/Branches/SelectedBranch";
import Dropdown from "../components/Branches/Dropdown";
import HeaderImage from "../components/HeaderImage";
import Section from "../components/Section";
import LangNotFound from "../components/LangNotFound";

const StyledBranches = styled.div``;

const Header = styled(Section)`
  background: ${({ theme }) => theme.colorWhite};
  p,
  h1 {
    max-width: 800px;
  }
  p {
    margin-bottom: 3rem;
  }
`;

const Branches = props => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const { lang } = props;

  return (
    <Query query={BRANCHES_QUERY} variables={{ lang: lang }}>
      {({ loading, error, data, fetchMore }) => {
        const { branches } = data;
        let page;
        if (!loading) {
          if (data && data.page.edges.length > 0) {
            page = data.page.edges[0].node.branches;
            !selectedBranch && setSelectedBranch(branches.edges[0].node.title);
          } else {
            return <LangNotFound page="branches" />;
          }
        }

        if (loading) return <p>Loading</p>;

        return (
          <StyledBranches>
            <HeaderImage image="https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Header>
              <h1>{page.header.title}</h1>
              <p>{page.header.text}</p>
              <Dropdown
                branches={branches.edges}
                selectedBranch={selectedBranch}
                setSelectedBranch={setSelectedBranch}
              />
            </Header>
            <ContactInfo />
            {selectedBranch && (
              <SelectedBranch
                lang={lang}
                activitiesTitle={page.activities_title}
                eventsTitle={page.events_title}
                selectedBranch={selectedBranch}
              />
            )}
          </StyledBranches>
        );
      }}
    </Query>
  );
};

export default Branches;
