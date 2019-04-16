import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// Components
import Container from '../Container';
import Activity from './Activity';
import Event from './Event';

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

const StyledSelectedBranch = styled.div``;

export const Activities = styled.div`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colorWhite};

  ${Container} {
    > div {
      margin-top: 5rem;
      display: grid;
      grid-template-rows: repeat(auto-fill, max-content);
      grid-template-columns: repeat(1, 1fr);
      row-gap: 2.5rem;
      column-gap: 0.5rem;

      > div {
        justify-self: center;
      }

      @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (min-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export const Events = styled.div`
  padding: 5rem 0;

  ${Container} {
    > div {
      margin-top: 5rem;
      display: grid;
      grid-template-rows: repeat(auto-fill, max-content);
      grid-template-columns: repeat(1, 1fr);
      row-gap: 1.5rem;
      column-gap: 1.5rem;

      > div {
        justify-self: center;
      }

      @media screen and (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;

const SelectedBranch = ({ lang, selectedBranch }) => {
  let branch;

  return (
    <StyledSelectedBranch>
      <Query
        query={BRANCH_QUERY}
        variables={{ lang: lang, branch: selectedBranch }}
        ssr={false}
        fetchPolicy="network-only"
      >
        {({ loading, error, data, fetchMore, refetch }) => {
          if (!loading) branch = data.branches.edges[0].node;
          else return null;

          const {
            acf: { activities }
          } = branch;

          return (
            <>
              <Activities>
                <Container>
                  <h1>Activities</h1>
                  <div>
                    {activities.length > 0 ? (
                      activities.map(activity => (
                        <Activity
                          image={activity.image}
                          title={activity.title}
                          description={activity.description}
                        />
                      ))
                    ) : (
                      <p>No activities available for this branch</p>
                    )}
                  </div>
                </Container>
              </Activities>
              <Events>
                <Container>
                  <h1>Upcoming events</h1>
                  <div>
                    <Event
                      image="https://via.placeholder.com/600x300"
                      date="2019-08-25 11:00:00"
                      title="Eid Al-Adha dag"
                      link="https://www.facebook.com/events/330053544400045/"
                    />
                    <Event
                      image="https://via.placeholder.com/600x300"
                      date="2019-08-25 11:00:00"
                      title="Eid Al-Adha dag"
                      link="https://www.facebook.com/events/330053544400045/"
                    />
                    <Event
                      image="https://via.placeholder.com/600x300"
                      date="2019-08-25 11:00:00"
                      title="Eid Al-Adha dag"
                      link="https://www.facebook.com/events/330053544400045/"
                    />
                  </div>
                </Container>
              </Events>
            </>
          );
        }}
      </Query>
    </StyledSelectedBranch>
  );
};

export default SelectedBranch;
