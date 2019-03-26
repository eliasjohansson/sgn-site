import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const StyledIndex = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
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

const Index = props => (
  <StyledIndex>
    <Query query={TEST_QUERY}>
      {({ loading, error, data, fetchMore }) => {
        console.log(props);
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

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(
    `https://graph.facebook.com/v3.2/421066311976162/events?access_token=${
      process.env.FB_ACCESS_TOKEN
    }`
  );
  const json = await res.json();
  return { events: json };
};

export default Index;
