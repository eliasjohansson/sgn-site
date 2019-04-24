import React from 'react';
import styled from 'styled-components';
import ContactForm from '../Forms/ContactForm';
import Banner from '../Banner';
import { SupahContainer } from '../Container';

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
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ reverse }) =>
    reverse ? 'minmax(0px, 595px) auto' : 'auto minmax(0px, 595px)'};
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.colorWhite};
  padding: 5rem 2rem 5rem 0;
  > * {
    grid-column: 2 / 3;
  }

  @media screen and (max-width: 1206px) {
    padding: 5rem 1rem;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;

    > * {
      grid-column: 1 / 3;
    }
  }
`;

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ reverse }) =>
    reverse ? 'minmax(0px, 595px) auto' : 'auto minmax(0px, 595px)'};
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.colorPrimary};
  > * {
    grid-column: 1 / 2;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Contact = ({ title, text, form }) => {
  return (
    <StyledContact>
      <FormContainer>
        <ContactForm title={title} form={form} />
      </FormContainer>
      <BannerContainer reverse>
        <ContactBanner primary>
          <h1>{text}</h1>
        </ContactBanner>
      </BannerContainer>
    </StyledContact>
  );
};

export default Contact;
