import { Query } from 'react-apollo';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import qs from 'query-string';

const StyledIndex = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HOME_QUERY = gql`
  query homeQuery($lang: String!) {
    homepage: pages(where: { title: "Home", lang: $lang }) {
      edges {
        node {
          title
          acf {
            hero {
              title
            }
          }
        }
      }
    }
  }
`;

const Index = props => {
  const { lang } = props;
  return (
    <StyledIndex>
      <Query query={HOME_QUERY} variables={{ lang: lang }}>
        {({ loading, error, data, fetchMore }) => {
          const homepage = data.homepage.edges[0].node;
          return (
            <div>
              {/*props.events.data.map(singlePost => {
              return (
                <div>
                  <h1> {singlePost.name} </h1>
                  <img src={singlePost.cover.source} />
                  <h1> {singlePost.description} </h1>
                </div>
              );
            })*/}
              {!loading && <p>{homepage.acf.hero.title}</p>}
            </div>
          );
        }}
      </Query>
    </StyledIndex>
  );
};

/* Index.getInitialProps = async ({ req }) => {
  const params = {
    access_token: process.env.FB_ACCESS_TOKEN,
    fields: [
      'cover',
      'description',
      'name',
      'owner',
      'start_time',
      'end_time',
      'category'
    ]
  };

  const res = await fetch(
    `https://graph.facebook.com/v3.2/421066311976162/events?${qs.stringify(
      params,
      { arrayFormat: 'comma' }
    )}`
  );
  const json = await res.json();
  return { events: json };
}; */

export default Index;
