import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Container from "../Container";

const StyledForm = styled.form``;

const MembershipForm = () => {
  return (
    <Container>
      <StyledForm>
        <h1>Membership Application</h1>
        <Input label="First name" />
        <Input label="Last name" />
        <Input
          label="Personal Number(YYYY-MM-DD-0000)"
          placeholder="1989-21-01-XXXX"
          pattern="\d{4}-?\d{2}-?\d{2}-?\d{4}"
          type="text"
          required
        />
        <Input label="Email" type="email" />
        <Input label="Subject" />
        <Input textarea label="Message" />
        <button
          onClick={e => {
            e.preventDefault();
          }}
          type="submit"
        >
          submit
        </button>
      </StyledForm>
    </Container>
  );
};
export default MembershipForm;
