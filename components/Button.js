import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 3rem;
  max-width: 343px;
  font: ${({ theme }) => theme.fontMobileP};
  border-style: none;
  border-radius: 5px;
  ${props =>
    props.primary
      ? `background-color: ${props.theme.colorPrimary}
         color: ${props.theme.colorWhite}
      `
      : `background-color: ${props.theme.colorWhite} 
          color: ${props.theme.colorDarkGrey}`};
  ${props =>
    props.outlined &&
    `
    border: solid 4px ${props.theme.colorPrimary}
    background-color: transparent;
    color: ${props.theme.colorPrimary};
    `}
  ${props =>
    props.small &&
    `
    width: 122px;
    `}

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
