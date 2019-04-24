import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import Section from "../Section";
import Checkbox from "../Checkbox";
const Wrapper = styled(Section)`
  > div form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill, auto);
    grid-auto-flow: dense;
    grid-gap: 2rem;
    @media screen and (max-width: 900px) {
      /* grid-template-columns: 1; */
      display: block;
    }
  }
`;

const StyledForm = styled.form`
  .col2 {
    grid-column: 2;
    grid-row: 1/8;
  }
  .hAlign {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      display: block;
    }
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
    <Wrapper>
      <h1>Membership Application</h1>
      <StyledForm>
        <div className="hAlign">
          <Input label="First name" />
          <Input label="Last name" />
        </div>
        <Input
          label="Personal Identity Number (YYYY-MM-DD-xxxx)"
          placeholder="1989-21-01-XXXX"
          pattern="\d{4}-?\d{2}-?\d{2}-?\d{4}"
          type="text"
          required
        />
        <div className="hAlign">
          <Input
            label="Date of birth"
            label="Date Of Birth (YYYY-MM-DD)"
            placeholder="1989-21-01"
            pattern="\d{4}-?\d{2}-?\d{2}"
            type="text"
            required
          />
          <Input
            label="LMA (12345678-9)"
            placeholder="12345678-9"
            type="text"
            required
            pattern="\d{8}-?\d{1}"
          />
        </div>
        <Input label="Adress" type="text" required />
        <div className="hAlign">
          <Input label="Post Number" type="text" required />
          <Input label="City" type="text" required />
        </div>
        <div className="hAlign">
          <Input label="Nationality" type="text" required />
          <Input
            label="In Sweden From:(YYYY-MM-DD)"
            pattern="\d{4}-?\d{2}-?\d{2}"
            type="text"
            required
          />
        </div>
        <Input label="Email" type="email" required />
        <Input label="Mobile number" type="text" required />
        <div className="col2">
          <Input textarea label="Education" />
          <Input textarea label="Profession" />
          <Input label="Mother language" type="text" required />
          <div className="termsWrapper">
            <Checkbox name="tac">
              I agree to the <a href="#">terms and conditions</a>
            </Checkbox>
          </div>
          <Button primary type="submit">
            Submit{" "}
          </Button>
        </div>
      </StyledForm>
    </Wrapper>
  );
};
export default MembershipForm;
