import React from "react";
import styled from "styled-components";
import Icon from "./Icons";

const StyledCheckbox = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  > span {
    height: 25px;
    width: 25px;
    margin-right: 1rem;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colorGrey};
    background-color: ${({ theme }) => theme.colorWhite};
    cursor: pointer;
  }

  &:hover > span {
    background-color: ${({ theme }) => theme.colorLightGrey};
  }
  svg {
    opacity: 0;
    fill: white;
  }
  input:checked ~ span {
    background-color: ${({ theme }) => theme.colorPrimary};
    > svg {
      opacity: 1;
      transition: 0.45s;
    }
  }
`;

const Checkbox = ({ children, name, value }) => {
  return (
    <StyledCheckbox htmlFor={`checkbox-${name}`}>
      <input
        type="checkbox"
        name={`checkbox-${name}`}
        id={`checkbox-${name}`}
        value={value}
      />

      <span>
        {" "}
        <Icon symbol="checked" />
      </span>
      <p>{children}</p>
    </StyledCheckbox>
  );
};

export default Checkbox;
