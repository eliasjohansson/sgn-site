import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Button from "./Button";
import Card from "./Card";
const Donations = styled(Section)`
  height: 100%;
  > div {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    gap: 1.5rem;
    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
`;
const ContentBox = styled(Card)`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  > button {
    margin-top: 2rem;
    > p {
      margin: 0;
    }
  }
  b {
    margin-bottom: 0.375rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;
const Donate = () => {
  return (
    <Donations>
      <ContentBox>
        <h1>Headline</h1>
        <p>
          Support Group Network (SGN) är en ideell förening som formats av
          asylsökande i samarbete med det svenska samhället i syfte att hjälpa
          andra asylsökande, flyktingar.
        </p>
        <Button>
          <p>Contact us</p>
        </Button>
      </ContentBox>
      <ContentBox>
        <h1>Headline</h1>
        <p>
          Support Group Network (SGN) är en ideell förening som formats av
          asylsökande i samarbete med det svenska samhället i syfte att hjälpa
          andra asylsökande, flyktingar.
        </p>
        <b>Swish</b>
        <p>1232233732</p>
        <b>Bank giro</b>
        <p>1232233732</p>
        <b>PayPal</b>
        <p>1232233732</p>
        <b>IBAN</b>
        <p>1232233732</p>
      </ContentBox>
    </Donations>
  );
};
export default Donate;
