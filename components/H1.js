import styled from "styled-components";
import React from "react";
const StyledH1 = styled.h1`
  &::after {
    ${props => (props.withExclamation ? `content: '!'` : `content: '.'`)}
  }
`;

const H1 = props => {
  return (
    <StyledH1 withExclamation={props.withExclamation}>
      {props.children}
    </StyledH1>
  );
};

export default H1;
