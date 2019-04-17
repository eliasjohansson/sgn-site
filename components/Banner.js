import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const StyledBanner = styled.div`
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
    max-width: 700px;
  }

  button {
    margin-top: 2rem;
  }
`;

const Banner = ({ children, primary, dark }) => {
  return (
    <StyledBanner primary={primary} dark={dark}>
      <Container>{children}</Container>
    </StyledBanner>
  );
};

export default Banner;
