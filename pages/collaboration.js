import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';

import COLLABORATION_QUERY from '../graphql/collaboration.gql';

// Components
import SingleCollab from '../components/SingleCollaboration';
import { Query } from 'react-apollo';
import LangNotFound from '../components/LangNotFound';

const StyledCollaboration = styled.div``;

const Collaboration = withRouter(props => {
  return (
    <Query
      query={COLLABORATION_QUERY}
      variables={{ lang: props.lang, title: props.router.query.id }}
    >
      {({ loading, error, data, fetchMore }) => {
        console.log(data);
        let collab;

        if (!loading) {
          if (data.collab.edges.length > 0) {
            collab = data.collab.edges[0].node;
          } else {
            return <LangNotFound />;
          }
        }

        if (loading) return null;

        return (
          <StyledCollaboration>
            <SingleCollab collab={collab} />
          </StyledCollaboration>
        );
      }}
    </Query>
  );
});

export default Collaboration;
