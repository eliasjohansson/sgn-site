import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledIndex = styled.div`
  background-color: dodgerblue;
`;

export const TEST_QUERY = gql`
  query testQuery {
    posts(where: { lang: "SV" }) {
      edges {
        node {
          title
          date
        }
      }
    }
  }
`;

const Index = () => (
  <StyledIndex>
    <Query query={TEST_QUERY}>
      {({ loading, error, data, fetchMore }) => {
        return (
          <div>
            {data.posts.edges.map(({ node }) => {
              return <p>{node.title}</p>;
            })}
          </div>
        );
      }}
    </Query>
  </StyledIndex>
);

export default Index;
