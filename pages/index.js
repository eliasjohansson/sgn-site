import { Query } from "react-apollo";
import { withRouter } from "next/router";
import gql from "graphql-tag";
import styled from "styled-components";
import qs from "query-string";

// Components
import Card from "../components/Card";
import Banner from "../components/Banner";
import Button from "../components/Button";

const StyledIndex = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HOME_QUERY = gql`
  query homeQuery($lang: String!) {
    page: pages(where: { title: "Home", lang: $lang }) {
      edges {
        node {
          home {
            header {
              title
              image
            }
            card1 {
              image {
                url
              }
              title
              text
            }
            quote
            card2 {
              image {
                url
              }
              title
              text
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
          let page;
          if (!loading) {
            page = data.page.edges[0].node.home;
          }

          return (
            <>
              <Card />

              <Banner dark>
                <h1>Banner</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  et blanditiis minus esse! Doloremque blanditiis consectetur
                  aut deserunt officiis quas consequuntur alias distinctio
                  laboriosam, velit tempore repudiandae aspernatur delectus
                  ducimus.
                </p>
                <Button>CTA</Button>
              </Banner>

              <Card />

              <Banner primary>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  et blanditiis minus esse! Doloremque blanditiis consectetur
                  aut deserunt officiis quas consequuntur alias distinctio
                  laboriosam, velit tempore repudiandae aspernatur delectus
                  ducimus.
                </p>
              </Banner>
              <Banner>
                <h1>Im White</h1>
              </Banner>
            </>
          );
        }}
      </Query>
    </StyledIndex>
  );
};

export default Index;
