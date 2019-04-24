import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  max-width: 343px;
  font: ${({ theme }) => theme.fontMobileP};
  border-style: none;
  border-radius: 2px;
  ${props =>
    props.primary
      ? `background-color: ${props.theme.colorPrimary}
         color: ${props.theme.colorWhite}
      `
      : `background-color: ${props.theme.colorWhite} 
          color: ${props.theme.colorPrimary}`};

  outline: inherit;
  transition: 0.15s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
