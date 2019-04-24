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
    a {
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
  }
  p,
  h1 {
    max-width: 800px;
  }
  .content {
    margin-bottom: 3rem;
  }
`;
const Contact = styled(Section)`
  h3 {
    margin-bottom: 0.3rem;
  }
  p {
    max-width: 800px;
  }
`;
const ContactWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorLightGrey};
  width: 100vw;
`;

const SingleCollaboration = ({ collab }) => {
  return (
    <>
      <HeaderImage image={collab.acf.image} />
      <StyledCollaboration>
        <Body>
          <h1>{collab.acf.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: collab.acf.content }}
          />
          {collab.acf.pdf && (
            <>
              <a href={collab.acf.pdf}>{collab.acf.pdf_label}</a>
              <br />
            </>
          )}
          {collab.acf.pdf && (
            <>
              <a href={collab.acf.website}>{collab.acf.website_label}</a>
              <br />
            </>
          )}
        </Body>
      </StyledCollaboration>
      <ContactWrapper>
        <Contact>
          <h3>{collab.acf.contact_info.title}</h3>
          <p>{collab.acf.contact_info.phone_number}</p>
          <p>{collab.acf.contact_info.email}</p>
        </Contact>
      </ContactWrapper>
    </>
  );
};

export default SingleCollaboration;
