import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Section from '../Section';
import Button from '../Button';

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

  div:last-child {
    flex: 1;

    overflow: hidden;
    margin-left: 1.5rem;
    p {
      font-size: 16px;
      span {
        text-overflow: ellipsis;
      }
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
    </StyledNews>
  );
};

export default News;
