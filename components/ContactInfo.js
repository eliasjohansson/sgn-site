import styled from "styled-components";
import Section from "./Section";
import Container from "./Container";
import React from "react";
import Icon from "./Icons";

const StyledInfoBox = styled(Section)`
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  div {
    margin-bottom: 1rem;
  }
  span {
    > p {
      padding-left: 2rem;
    }
  }
`;
const Wrapper = styled(Container)`
width: 100%;
column-gap: 5rem;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = () => {
  return (
    <>
      <StyledInfoBox>
        <h2>Location name</h2>
        <Wrapper>
          <div>
            <h3>Adress</h3>
            <p>Kungsladugårdsvägen 5</p>
            <p>46254 Vänersborg</p>
          </div>
          <div>
            <h3>E-mail</h3>
            <p>restadgard@supportgroup.se</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+4676-884 80 84</p>
          </div>
          <div>
            <h3>Social Media</h3>
            <a>
            <span>
              <Icon symbol="facebook-bg" /> 
          
              <p>facebook</p>
            </span>
            </a>
          </div>
        </Wrapper>
      </StyledInfoBox>
    </>
  );
};

export default ContactInfo;
