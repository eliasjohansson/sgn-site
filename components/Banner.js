import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Section from "./Section";

const StyledBanner = styled(Section)`
  ${({ theme, primary, dark }) => {
    if (primary)
      return `
      background-color: ${theme.colorPrimary};
      color: ${theme.colorWhite};
    `;

    if (dark)
      return `
      background-color: ${theme.colorDarkGrey};
      color: ${theme.colorWhite};
    `;

    return `
      background-color: ${theme.colorLightGrey};
      color: ${theme.colorPrimary};
    `;
  }}

  padding: 5rem 1rem;
  text-align: center;

  > * {
    max-width: 900px;
  }

  i {
    font-weight: bold;
    font-size: 28px;
    line-height: 110%;
  }

  button,
  a {
    margin: 0 auto;
    margin-top: 2rem;
  }
`;

const Banner = ({ children, primary, dark, className }) => {
  return (
    <StyledBanner className={className} primary={primary} dark={dark}>
      <Container>{children}</Container>
    </StyledBanner>
  );
};

export default Banner;
