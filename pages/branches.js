import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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

export const BRANCH_QUERY = gql`
  query branchQuery($lang: String!, $branch: String!) {
    branches(where: { title: $branch, lang: $lang }) {
      edges {
        node {
          title
          acf {
            activities {
              title
              description
              date_time
              image
            }
          }
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
          }

          if (loading) return null;

          return (
            <>
              <Header>
                <h1>{page.header.title}</h1>
                <p>{page.header.text}</p>
              </Header>
              <Container>
                {selectedBranch && (
                  <div>
                    <Query
                      query={BRANCH_QUERY}
                      variables={{ lang: lang, branch: selectedBranch }}
                      ssr={false}
                      fetchPolicy="network-only"
                    >
                      {({ loading, error, data, fetchMore, refetch }) => {
                        let branch;
                        if (!loading) {
                          branch = data.branches.edges[0].node;
                        } else {
                          return <p>Loading...</p>;
                        }

                        console.log(branch);
                        return (
                          <>
                            <ul>
                              {branches.edges.map(({ node: branch }, i) => (
                                <li
                                  onClick={() =>
                                    setSelectedBranch(branch.title)
                                  }
                                >
                                  {branch.title}
                                </li>
                              ))}
                            </ul>
                            <h1>{branch.title}</h1>
                            <h3>Activities</h3>
                            {branch.acf.activities.map(activity => (
                              <>
                                <br />
                                <p>{activity.title}</p>
                                <img src={activity.image} alt="" />
                              </>
                            ))}
                          </>
                        );
                      }}
                    </Query>
                  </div>
                )}
              </Container>
            </>
          );
        }}
      </Query>
    </StyledBranches>
  );
};

export default Branches;
