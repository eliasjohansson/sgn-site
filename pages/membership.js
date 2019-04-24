import React from "react";
import styled from "styled-components";

// Components
import MembershipForm from "../components/Forms/MembershipForm";
import HeaderImage from "../components/HeaderImage";
import Section from "../components/Section";

const StyledMembership = styled.div``;

const Header = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  color: ${({ theme }) => theme.colorDarkGrey};
`;
const Membership = props => {
  return (
    <StyledMembership>
      <HeaderImage image="https://images.pexels.com/photos/1963622/pexels-photo-1963622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <Header>
        <h1>Headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
      </Header>
      <MembershipForm />
    </StyledMembership>
  );
};

export default Membership;
