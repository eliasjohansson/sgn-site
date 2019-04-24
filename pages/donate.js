import React from "react";
import styled from "styled-components";

// Components
import HeaderImage from "../components/HeaderImage";
import Section from "../components/Section";
import Banner from "../components/Banner";
import Button from "../components/Button";
import H1 from "../components/H1";
import Donate from "../components/Donate";

const StyledDonations = styled.div``;

const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;
const Donations = props => {
  return (
    <StyledDonations>
      <HeaderImage image="https://images.pexels.com/photos/1409716/pexels-photo-1409716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Header>
        <h1>Headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </Header>
      <Donate />
      <Banner primary>
        <H1 withExclamation>We are always looking for new members</H1>
        <Button>CTA</Button>
      </Banner>
    </StyledDonations>
  );
};

export default Donations;
