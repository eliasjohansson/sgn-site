import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import { Link } from '../routes';

import PAGE_TRANSLATIONS_QUERY from '../graphql/page-translations.gql';
import Section from './Section';

const StyledLangNotFound = styled(Section)`
  ul {
    padding: 1rem;
  }
`;

const LangNotFound = ({ page }) => {
  return (
    <StyledLangNotFound>
      <Query
        query={PAGE_TRANSLATIONS_QUERY}
        variables={{
          page
        }}
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading) return null;

          let availableLanguages = [];
          if (data && data.pages.edges.length > 0) {
            availableLanguages = data.pages.edges[0].node.availableLanguages;
          }

          return (
            <>
              <h3>Language could not be found</h3>
              <p>
                The page you were trying to visit is available in the following
                languages.
              </p>
              <ul>
                {availableLanguages.map(lang => (
                  <li>
                    <Link route={page} params={{ lang }}>
                      <a>{lang}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          );
        }}
      </Query>
    </StyledLangNotFound>
  );
};

export default LangNotFound;
