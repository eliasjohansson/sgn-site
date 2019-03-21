import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const TEST_QUERY = gql`
  query testQuery {
    posts {
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
  <div>
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
  </div>
);

export default Index;
