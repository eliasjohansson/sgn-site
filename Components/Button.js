import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 343px;
  height: 48px;
  border-style: none;
  margin: 8px;
  border-radius: 5px;
  ${props =>
    props.primary
      ? `background-color: ${props.theme.primary}
         color: ${props.theme.white}
      `
      : `background-color: ${props.theme.white} 
          color: ${props.theme.darkGrey}`};
  ${props =>
    props.outlined &&
    `
    border: solid 4px ${props.theme.primary}
    background-color: transparent;
    color: ${props.theme.primary};
    `}

  font-family: Roboto;
  font-weight: bold;
  outline: inherit;
  transition: 0.15s ease-in-out;
  &:active {
    transform: scale(1.02);
  }
`;
const Button = props => {
  return <StyledButton {...props}> CTA </StyledButton>;
};

export default Button;
