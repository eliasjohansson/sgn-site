import React, { useState } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// Components
import Container from '../components/Container';
import SelectedBranch from '../components/Branches/SelectedBranch';
import Dropdown from '../components/Branches/Dropdown';

export const BRANCHES_QUERY = gql`
  query branchesQuery($lang: String!) {
    page: pages(where: { title: "Branches", lang: $lang }) {
      edges {
        node {
          branches {
            header {
              title
              text
              image
            }
          }
        }
      }
    }
    branches: branches(where: { lang: $lang }) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

const StyledBranches = styled.div``;

const Header = styled(Container)`
  margin-bottom: 2rem;
  > * {
    max-width: 800px;
  }
`;

const Branches = props => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const { lang } = props;
  return (
    <StyledBranches>
      <Query query={BRANCHES_QUERY} variables={{ lang: lang }}>
        {({ loading, error, data, fetchMore }) => {
          const { page: pageData, branches } = data;

          let page;
          if (!loading) {
            page = pageData.edges[0].node.branches;
            !selectedBranch && setSelectedBranch(branches.edges[0].node.title);
          } else {
            return null;
          }

          return (
            <>
              <Header>
                <h1>{page.header.title}</h1>
                <p>{page.header.text}</p>
              </Header>
              <Container style={{ marginBottom: '2rem' }}>
                {/* <ul>
                  {branches.edges.map(({ node: branch }) => (
                    <li
                      onClick={() => setSelectedBranch(branch.title)}
                      style={{
                        marginBottom: '1rem',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                      }}
                    >
                      {branch.title}
                    </li>
                  ))}
                </ul> */}

                <Dropdown
                  branches={branches.edges}
                  selectedBranch={selectedBranch}
                  setSelectedBranch={setSelectedBranch}
                />
              </Container>

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
