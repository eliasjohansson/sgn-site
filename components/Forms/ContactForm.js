import React from "react";
import styled from "styled-components";

// Components
import Input from "../Input";
import Button from "../Button";
import Section from "../Section";
import Checkbox from "../Checkbox";

const StyledContactForm = styled.div`
  h1 {
    margin-bottom: 2.5rem;
  }
`;

const ContactForm = props => {
  return (
    <StyledContactForm>
      <h1>Contact Us</h1>
      <form onSubmit={() => console.log("Submitted contact form")}>
        <Input label="Name" />
        <Input label="Email" type="email" />
        <Input label="Subject" />
        <Input textarea label="Message" />
        <Checkbox name="tac">
          I agree to the <a href="#">terms and conditions</a>
        </Checkbox>
        <Button type="submit" primary>
          Send
        </Button>
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
