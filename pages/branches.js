import React, { useState } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// Queries
import BRANCHES_QUERY from '../graphql/branches.gql';

// Components
import Container from '../components/Container';
import SelectedBranch from '../components/Branches/SelectedBranch';
import Dropdown from '../components/Branches/Dropdown';
import HeaderImage from '../components/HeaderImage';
import Section from '../components/Section';

const StyledBranches = styled.div``;

const Header = styled(Section)`
  p,
  h1 {
    max-width: 800px;
  }
  p {
    margin-bottom: 3rem;
  }
`;

const Branches = props => {
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const { lang } = props;

  if (process.browser && page === null && !isLoading)
    Router.replace('/404?error=lang&from=branches');

  return (
    <StyledBranches>
      <Query query={BRANCHES_QUERY} variables={{ lang: lang }}>
        {({ loading, error, data, fetchMore }) => {
          const { page: pageData, branches } = data;

          if (!loading) setIsLoading(false);

          if (pageData && pageData.edges.length > 0) {
            setPage(pageData.edges[0].node.branches);
            !selectedBranch && setSelectedBranch(branches.edges[0].node.title);
          }

          if (isLoading || page === null) return null;

          return (
            <>
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

              {selectedBranch && (
                <SelectedBranch lang={lang} selectedBranch={selectedBranch} />
              )}
            </>
          );
        }}
      </Query>
    </StyledBranches>
  );
};

export default Branches;
