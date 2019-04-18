import React from 'react';
import styled from 'styled-components';
import ContactForm from '../Forms/ContactForm';
import Banner from '../Banner';

export const StyledContact = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colorWhite};

  > * {
    flex: 1;
  }
`;

export const ContactBanner = styled(Banner)`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    max-width: 500px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Contact = props => {
  return (
    <StyledContact>
      <ContactForm />
      <ContactBanner primary>
        <h1>Feel free to contact us regarding any subject.</h1>
      </ContactBanner>
    </StyledContact>
  );
};

export default Contact;
