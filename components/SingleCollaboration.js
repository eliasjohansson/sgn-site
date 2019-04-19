import styled from 'styled-components';
import React from 'react';
import Section from './Section';
import HeaderImage from './HeaderImage';

const StyledCollaboration = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  width: 100vw;
  padding-top: 0;
`;

const Body = styled(Section)`
  > div {
    padding-left: 0;
  }
  p,
  h1 {
    max-width: 800px;
  }
  p {
    margin-bottom: 3rem;
  }
`;
const Contact = styled(Section)`
  p {
    max-width: 800px;
  }
`;
const ContactWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorLightGrey};
  width: 100vw;
`;

const SingleCollaboration = () => {
  return (
    <>
      <HeaderImage image="https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <StyledCollaboration>
        <Body>
          <h1>Talking to the community</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede. Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
            a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
            pede.
          </p>
          <a>Download as PDF</a> <br />
          <a>Visit Website</a>
        </Body>
      </StyledCollaboration>
      <ContactWrapper>
        <Contact>
          <h3>Contact information</h3>
          <p>+4676-884 08 84</p>
          <p>info@supportgroup.se</p>
        </Contact>
      </ContactWrapper>
    </>
  );
};

export default SingleCollaboration;
