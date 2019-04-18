import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Card from "./Card";
const StyledNews = styled(Section)`
  > div {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 580px;
    gap: 2rem;
  }
`;
const StyledCard = styled(Card)`
  height: 100%;
  img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  p {
    padding: 1rem;
  }
`;

const News = () => {
  return (
    <StyledNews>
      <StyledCard>
        <img src="https://via.placeholder.com/1480x880" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor fncjjkvbodnvkmv dknvkdsmc ckpdmc incididunt ut labore
          et dolor <a href="#">... read more </a>
        </p>
      </StyledCard>
      <StyledCard>
        <img src="https://via.placeholder.com/1024x600" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor fncjjkvbodnvkmv dknvkdsmc ckpdmc incididunt ut labore
          et dolor <a href="#">... read more </a>
        </p>
      </StyledCard>
      <StyledCard>
        <img src="https://via.placeholder.com/480x500" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor fncjjkvbodnvkmv dknvkdsmc ckpdmc incididunt ut labore
          et dolor <a href="#">... read more </a>
        </p>
      </StyledCard>
    </StyledNews>
  );
};
export default News;
