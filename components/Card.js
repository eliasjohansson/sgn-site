import React from "react";
import styled from "styled-components";
import Button from "./Button";
const StyledCard = styled.div`
  font-family: "Roboto";
  background-color: ${({ theme }) => theme.colorLightGrey};
  width: 375px;
  & div {
    padding: 1rem;
    width: 100%;
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
      <img src="https://imgplaceholder.com/375x375" alt="" />
      <div>
        <h1>H1 Headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet orci. Aenean dignissim pellentesque felis.
        </p>
        {/* {props.withCta && <Button />} */}
        {props.withLink && (
          <a className="link" href="#">
            Read more
          </a>
        )}
        {props.withCta && <Button primary />}
      </div>
    </StyledCard>
  );
};

export default Card;
