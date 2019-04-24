import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// Components
import Container from '../Container';
import ImageListItem from '../ImageListItem';
import Event from './Event';

// Queries
import BRANCH_QUERY from '../../graphql/branch.gql';
import EVENTS_QUERY from '../../graphql/events.gql';

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

const SelectedBranch = ({
  lang,
  selectedBranch,
  activitiesTitle,
  eventsTitle
}) => {
  return (
    <Query
      query={BRANCH_QUERY}
      variables={{ lang: lang, title: selectedBranch }}
    >
      {({ loading, error, data, fetchMore, refetch }) => {
        let branch;
        if (loading) return null;

        branch = data.branch.edges[0].node;
        const {
          acf: { activities, events, contact_info }
        } = branch;

        console.log(contact_info);
        return (
          <StyledSelectedBranch>
            <Activities>
              <Container>
                <h1>{activitiesTitle}</h1>
                <div>
                  {activities.length > 0 ? (
                    activities.map(activity => (
                      <ImageListItem
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
            {JSON.parse(events) && (
              <Events>
                <Query
                  query={EVENTS_QUERY}
                  variables={{
                    lang: lang,
                    ids: JSON.parse(events).map(e => e.event)
                  }}
                  ssr={false}
                >
                  {({
                    loading: eventsLoading,
                    error,
                    data,
                    fetchMore,
                    refetch
                  }) => {
                    if (eventsLoading) return null;

                    return (
                      <Container>
                        <h1>{eventsTitle}</h1>
                        <div>
                          {data.events.edges.map(({ node }) => (
                            <Event
                              image={node.acf.image}
                              date={node.acf.date}
                              title={node.title}
                              link={node.facebook_event}
                            />
                          ))}
                        </div>
                      </Container>
                    );
                  }}
                </Query>
              </Events>
            )}
          </StyledSelectedBranch>
        );
      }}
    </Query>
  );
};

export default SelectedBranch;
