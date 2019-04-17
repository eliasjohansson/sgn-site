import { Query } from "react-apollo";
import { withRouter } from "next/router";
import gql from "graphql-tag";
import styled from "styled-components";
import qs from "query-string";
import Card from "../components/Card";
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
          let homepage;
          if (!loading) {
            homepage = data.homepage.edges[0].node;
          }
          return (
            <>
              <Card />
              <Card />
            </>
          );
        }}
      </Query>
    </StyledIndex>
  );
};

export default Index;
