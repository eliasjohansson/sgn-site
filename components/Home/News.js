import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Section from '../Section';
import Button from '../Button';

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fncjjkvbodnvkmv dknvkdsmc ckpdmc incididunt ut labore et dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fncjjkvbodnvkmv dknvkdsmc ckpdmc incididunt ut labore et dolor`;

export const StyledNews = styled(Section)`
  > div {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 2rem;

    @media screen and (max-width: 900px) {
      grid-template-rows: repeat(4, auto);
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const InfoCard = styled(Card)`
  padding: 3rem 1.5rem;
  grid-row: 1 / 4;

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 900px) {
  }
`;

export const Post = styled(Card)`
  padding: 1.5rem;
  display: flex;
  min-height: 175px;
  height: auto;
  position: relative;

  img {
    object-fit: cover;
    width: 35%;
    min-height: 100%;
  }

  > div {
    flex: 1;
    overflow: hidden;
    margin-left: 1.5rem;
    p {
      font-size: 16px;
      position: relative;
      span {
        text-overflow: ellipsis;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 150px;
      margin-bottom: 1rem;
    }

    > div {
      margin-left: 0;
    }
  }
`;

const News = props => {
  return (
    <StyledNews>
      <InfoCard>
        <h1>News feed</h1>
        <p>
          Support Group Network (SGN) är en ideell förening som formats av
          asylsökande i samarbete med det svenska samhället i syfte att hjälpa
          andra asylsökande, flyktingar.
        </p>
        <Button outlined>CTA</Button>
      </InfoCard>
      <Post>
        <img src="https://via.placeholder.com/200x150" />
        <div>
          <small>2019-02-11</small>
          <p>
            {text.slice(0, 170)} ...
            <a href="#">read more</a>
          </p>
        </div>
      </Post>
      <Post>
        <img src="https://via.placeholder.com/200x150" />
        <div>
          <small>2019-02-11</small>
          <p>
            <span>{text.slice(0, 170)} ... </span>
            <a href="#">read more</a>
          </p>
        </div>
      </Post>
      <Post>
        <img src="https://via.placeholder.com/200x150" />
        <div>
          <small>2019-02-11</small>
          <p>
            <span>{text.slice(0, 170)} ... </span>
            <a href="#">read more</a>
          </p>
        </div>
      </Post>
    </StyledNews>
  );
};

export default News;
