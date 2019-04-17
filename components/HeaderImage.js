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
    img {
      min-height: 60vh;
    }
  }
`;
const HeaderImage = props => {
  return (
    <StyledHeaderImage>
      <img src="https://images.pexels.com/photos/106829/pexels-photo-106829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </StyledHeaderImage>
  );
};

export default HeaderImage;
