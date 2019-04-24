import styled from "styled-components";
import Section from "./Section";
import React from "react";

const StyledInfoBox = styled(Section)`
  display: flex;
  justify-content: center;
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
`;
const infoBox = styled.div``;
const ContactInfo = () => {
  return (
    <StyledInfoBox>
      <h2>Location name</h2>
      <infoBox>
        <h3>Adress</h3>
        <p>Kunglasdugårdsgatan 414 72</p>
        <p>Vänersborg</p>
      </infoBox>
      <infoBox>
        <h3>Adress</h3>
        <p>Kunglasdugårdsgatan 414 72</p>
        <p>Vänersborg</p>
      </infoBox>
      <infoBox>
        <h3>Adress</h3>
        <p>Kunglasdugårdsgatan 414 72</p>
        <p>Vänersborg</p>
      </infoBox>
      <infoBox>
        <h3>Adress</h3>
        <p>Kunglasdugårdsgatan 414 72</p>
        <p>Vänersborg</p>
      </infoBox>
    </StyledInfoBox>
  );
};

export default ContactInfo;
