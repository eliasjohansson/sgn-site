import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import Container from "../Container";

const StyledForm = styled.form`
  ${Container} {
    background-color: blue;
    display: grid;
    grid-template-columns: 200px 200px;
    grid-auto-rows: auto;
  }
  p {
    font: ${({ theme }) => theme.fontMobileP};
  }
  .termsWrapper {
    display: flex;
    input {
      margin-right: 0.5rem;
    }
  }
`;

const MembershipForm = () => {
  return (
    <Container>
      <StyledForm>
        <h1>Membership Application</h1>
        <Input label="First name" />
        <Input label="Last name" />
        <Input
          label="Personal Identity Number (YYYY-MM-DD-xxxx)"
          placeholder="1989-21-01-XXXX"
          pattern="\d{4}-?\d{2}-?\d{2}-?\d{4}"
          type="text"
          required
        />
        <Input
          label="Date of birth"
          label="Date Of Birth (YYYY-MM-DD)"
          placeholder="1989-21-01"
          pattern="\d{4}-?\d{2}-?\d{2}"
          type="text"
          required
        />
        <Input
          label="LMA (12-345678/9)"
          placeholder="12-345678/9"
          type="text"
          required
          pattern="\d{2}-?\d{6}/?\d{1}"
        />
        <Input label="Adress" type="text" required />
        <Input label="Post Number" type="text" required />
        <Input label="City" type="text" required />
        <Input label="Nationality" type="text" required />
        <Input
          label="In Sweden From:(YYYY-MM-DD)"
          pattern="\d{4}-?\d{2}-?\d{2}"
          type="text"
          required
        />
        <Input label="Email" type="email" required />
        <Input label="Mobile number" type="text" required />
        <Input textarea label="Education" />
        <Input textarea label="Profession" />
        <Input label="Mother language" type="text" required />
        <div className="termsWrapper">
          <input type="checkbox" name="vehicle1" value="Bike" />{" "}
          <p>
            {" "}
            I agree to the<a href="#"> terms and conditions</a>
          </p>
        </div>
        <Button primary type="submit" />
      </StyledForm>
    </Container>
  );
};
export default MembershipForm;
