import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Button from './Button';
import Card from './Card';
import LinkButton from './LinkButton';

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

const Donate = ({ lang, collaborateCard, donateCard }) => {
  return (
    <Donations>
      <ContentBox>
        <h1>{collaborateCard.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: collaborateCard.text }} />
        <LinkButton primary external href={`/${lang}/collaborations`}>
          {collaborateCard.button_label}
        </LinkButton>
      </ContentBox>
      <ContentBox>
        <h1>{donateCard.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: donateCard.text }} />
        {donateCard.donation_alternatives.map(alt => (
          <>
            <b>{alt.name}</b>
            <p>{alt.value}</p>
          </>
        ))}
      </ContentBox>
    </Donations>
  );
};
export default Donate;
