import React from "react";
import styled from "styled-components";

const StyledHeaderImage = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    object-fit: cover;
    width: 100%;
    height: 50%;
  }
  @media screen and (max-width: 900px) {
    img {
      height: 60vh;
    }
  }
`;
const HeaderImage = props => {
  return (
    <StyledHeaderImage>
      <img src="https://via.placeholder.com/1440x880" />
    </StyledHeaderImage>
  );
};

export default HeaderImage;
