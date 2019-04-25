import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Card from "./Card";
import data from "../FacebookMockData/data";
import Autolinker from 'autolinker';
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
  const posts = data.data
  return (

    <StyledNews>
      {posts.map(post => {
        if (post.full_picture && post.message) {
          if (post.message.includes('http' || 'https')) {
            post.message = Autolinker.link(post.message);
          }
        return(
      <StyledCard>
        <img src={post.full_picture} />
        <p>
         {post.message} <a href="#">... read more </a>
        </p>
      </StyledCard>
        )
        }
  })}
    </StyledNews>
  );
};
export default News;
