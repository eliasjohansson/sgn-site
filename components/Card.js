import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colorLightGrey};
  h1 {
  }
  height: 100vh;
  width: 100vw;
  img {
    height: 50vh;
  }
  .content-wrapper {
    background-color: inherit;
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    & p {
      margin-bottom: 2rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colorPrimary};
    text-decoration: none;
    & :visited {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }
`;

const Card = props => {
  return (
    <StyledCard>
      <img src="https://dummyimage.com/375x375/fff/aaa" alt="" />
      <div className="content-wrapper">
        <h1>H1 Headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet orci. Aenean dignissim pellentesque felis. Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
          volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
          urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
          justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis.
        </p>
        <Wrapper>
          {props.children}
          {props.withLink && (
            <a className="link" href="#">
              Read more ➤
            </a>
          )}
        </Wrapper>
      </div>
    </StyledCard>
  );
};

export default Card;
