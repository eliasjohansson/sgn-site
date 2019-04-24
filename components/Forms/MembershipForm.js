import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import Section from '../Section';
import Checkbox from '../Checkbox';

const Wrapper = styled(Section)`
  > div form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, 1fr);
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

const CustomInput = styled(Input)`
  margin-bottom: 0;
`;

const MembershipForm = ({ form }) => {
  return (
    <Wrapper>
      <h1>{form.title}</h1>
      <StyledForm>
        <div className="hAlign">
          <CustomInput label={form.labels.first_name} />
          <CustomInput label={form.labels.last_name} />
        </div>
        <CustomInput
          label={form.labels.personal_number + ' (YYYY-MM-DD-xxxx)'}
          placeholder="1989-21-01-XXXX"
          pattern="\d{4}-?\d{2}-?\d{2}-?\d{4}"
          type="text"
          required
        />
        <div className="hAlign">
          <CustomInput
            label={form.labels.birth_date + ' (YYYY-MM-DD)'}
            placeholder="1989-21-01"
            pattern="\d{4}-?\d{2}-?\d{2}"
            type="text"
            required
          />
          <CustomInput
            label={form.labels.lma + ' (12345678-9)'}
            placeholder="12345678-9"
            type="text"
            required
            pattern="\d{8}-?\d{1}"
          />
        </div>
        <CustomInput label={form.labels.address} type="text" required />
        <div className="hAlign">
          <CustomInput label={form.labels.zipcode} type="text" required />
          <CustomInput label={form.labels.city} type="text" required />
        </div>
        <div className="hAlign">
          <CustomInput label={form.labels.nationality} type="text" required />
          <CustomInput
            label={form.labels.in_sweden_from + ' (YYYY-MM-DD)'}
            pattern="\d{4}-?\d{2}-?\d{2}"
            type="text"
            required
          />
        </div>
        <CustomInput label={form.labels.email} type="email" required />
        <CustomInput label={form.labels.mobile_number} type="text" required />
        <div className="col2">
          <Input textarea label={form.labels.education} />
          <Input textarea label={form.labels.profession} />
          <Input label={form.labels.mother_language} type="text" required />
          <div className="termsWrapper">
            <Checkbox name="tac">
              {form.terms_and_condition.i_agree_to_the}{' '}
              <a href="#">{form.terms_and_condition.terms_and_conditions}</a>
            </Checkbox>
          </div>
          <Button primary type="submit">
            {form.sign_up_button}
          </Button>
        </div>
      </StyledForm>
    </Wrapper>
  );
};
export default MembershipForm;
