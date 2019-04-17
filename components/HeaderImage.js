import React from "react";
import styled from "styled-components";

const StyledHeaderImage = styled.div`
  width: 100vw;
  img {
    object-fit: cover;
    width: 100%;
    max-height: 50vh;
  }
  @media screen and (max-width: 900px) {
    img {
      min-height: 60vh;
    }
  }
`;
const HeaderImage = props => {
  return (
    <StyledHeaderImage>
      <img src="https://via.placeholder.com/1440x880" />
      <h1>Hello</h1>
    </StyledHeaderImage>
  );
};

export default HeaderImage;
