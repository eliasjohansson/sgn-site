import { Query } from 'react-apollo';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import styled from 'styled-components';
import qs from 'query-string';

// Components
import BigSection from '../components/Home/BigSection';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Hero from '../components/Hero';
import News from '../components/Home/News';
import Awards from '../components/Home/Awards';
import Visions from '../components/Home/Visions';

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
              <Hero image="https://images.unsplash.com/photo-1548107116-762a8ff356f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
              <BigSection image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80">
                <h1>H1 - Desktop</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias optio laboriosam perspiciatis, debitis aliquid et,
                  iste esse velit, iusto facere perferendis tempora illo
                  dignissimos consequatur est inventore porro laborum sapiente.
                </p>
              </BigSection>
              <Banner>
                <i>
                  “De har hjälpt mig att hålla mig igång och uppleva
                  meningsfullhet i den riktningslösa framtiden”.
                </i>
              </Banner>
              <BigSection />
              <Visions />
              <Banner primary>
                <h1>Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  nisi dicta quisquam aut dolor, assumenda commodi mollitia
                  voluptatem amet ea, nobis quasi repudiandae repellendus
                  nostrum quidem. Vitae quod non eaque!
                </p>
                <Button>CTA</Button>
              </Banner>
              <Awards />
              <News />
              <Banner primary>
                <h1>Title</h1>
                <Button>CTA</Button>
              </Banner>
            </>
          );
        }}
      </Query>
    </StyledIndex>
  );
};

export default Index;
