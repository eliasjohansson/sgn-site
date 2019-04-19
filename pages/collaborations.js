import React from "react";
import styled from "styled-components";
import Collabs from "../components/Collaborations";
import HeaderImage from "../components/HeaderImage";
import Section from "../components/Section";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { withRouter } from "next/router";
const StyledCollaborations = styled.div`
  & h1 {
    margin: 0;
    margin-bottom: 5rem;
  }
`;
const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;
const Collaborations = withRouter(props => {
  return (
    <StyledCollaborations>
      <HeaderImage image="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Header>
        <h1>Headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </Header>
      <Collabs lang={props.lang} />
      <Banner primary>
        <h1>Title</h1>
        <Button>CTA</Button>
      </Banner>
    </StyledCollaborations>
  );
});

export default Collaborations;
