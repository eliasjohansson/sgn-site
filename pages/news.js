import React from "react";
import { withRouter } from "next/router";
import styled from "styled-components";
import HeaderImage from "../components/HeaderImage";
import Section from "../components/Section";
import Banner from "../components/Banner";
import Button from "../components/Button";
import NewsComponent from "../components/NewsComponent";
const StyledNews = styled.div``;
const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;
const News = props => {
  return (
    <StyledNews>
      <HeaderImage image="https://images.pexels.com/photos/900102/pexels-photo-900102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Header>
        <h1>Headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </Header>
      <NewsComponent />
      <Banner primary>
        <h1>Title</h1>
        <Button>CTA</Button>
      </Banner>
    </StyledNews>
  );
};

export default News;
