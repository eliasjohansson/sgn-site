import React from 'react';
import styled from 'styled-components';

// Components
import Input from '../Input';
import Button from '../Button';
import Section from '../Section';
import Checkbox from '../Checkbox';

const StyledContactForm = styled.div`
  h1 {
    margin-bottom: 2.5rem;
  }
`;

const ContactForm = ({ title, form }) => {
  return (
    <StyledContactForm>
      <h1>{title}</h1>
      <form onSubmit={() => console.log('Submitted contact form')}>
        <Input label={form.name.label} />
        <Input label={form.email.label} type="email" />
        <Input label={form.subject.label} />
        <Input textarea label={form.message.label} />
        <Checkbox name="tac">{form.tac_label}</Checkbox>
        <Button type="submit" primary>
          {form.button_label}
        </Button>
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
