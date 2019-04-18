import React from "react";
import styled from "styled-components";

const StyledHeaderImage = styled.div`
  /* position: relative; */
  width: 100vw;
  height: 50vh;
  img {
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    height: 60vh;
  }
`;
const HeaderImage = ({ image }) => {
  return (
    <StyledHeaderImage>
      <img src={image} />
    </StyledHeaderImage>
  );
};

export default HeaderImage;
