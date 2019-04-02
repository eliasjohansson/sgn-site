import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import qs from 'query-string';

const StyledIndex = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HOME_QUERY = gql`
  query homeQuery {
    homepage: pageBy(uri: "home") {
      sections {
        title
      }
    }
  }
`;

const Index = props => (
  <StyledIndex>
    <Query query={HOME_QUERY}>
      {({ loading, error, data, fetchMore }) => {
        console.log(data);
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
            {data.homepage.sections.map(section => (
              <p>{section.title}</p>
            ))}
          </div>
        );
      }}
    </Query>
  </StyledIndex>
);

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
