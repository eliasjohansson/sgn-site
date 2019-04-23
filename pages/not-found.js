import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import { Link } from '../routes';

import NOTFOUND_QUERY from '../graphql/not-found.gql';
import Section from '../components/Section';

const StyledNotFound = styled(Section)`
  ul {
    padding: 1rem;
  }
`;

const NotFound = withRouter(props => {
  const { error: routeError, from: fromRoute } = props.router.query;
  return (
    <StyledNotFound>
      <Query
        query={NOTFOUND_QUERY}
        skip={!fromRoute || routeError !== 'lang'}
        variables={{
          page: fromRoute
        }}
        ssr={false}
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading) return null;

          let availableLanguages = [];
          if (data && data.pages.edges.length > 0) {
            availableLanguages = data.pages.edges[0].node.availableLanguages;
          }

          return (
            <>
              <h1>404 | Not Found</h1>
              {routeError && routeError === 'lang' && (
                <>
                  <h3>Language could not be found</h3>
                  <p>
                    The page you were trying to visit is available in the
                    following languages.
                  </p>
                  <ul>
                    {availableLanguages.map(lang => (
                      <li>
                        <Link route={`/${lang}/${fromRoute}`}>
                          <a>{lang}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          );
        }}
      </Query>
    </StyledNotFound>
  );
});

export default NotFound;
