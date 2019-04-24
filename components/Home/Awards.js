import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Container from '../Container';
import Section from '../Section';

export const StyledAwards = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  padding-bottom: 4rem;
  > div {
    overflow-x: hidden;
    > div {
      padding-bottom: 1rem;
      margin-top: 5rem;
      display: grid;
      grid-template-rows: repeat(auto-fill, max-content);
      grid-template-columns: repeat(3, 1fr);
      row-gap: 1.5rem;
      column-gap: 5rem;
      overflow-x: scroll;
    }
  }
`;

export const Award = styled(Card)`
  min-width: 250px;
  a {
    > div {
      width: 100%;
      padding-bottom: 100%;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h4 {
      padding: 1.5rem 1rem;
      text-align: center;
      color: ${({ theme }) => theme.colorDarkGrey};
    }
  }
`;

const Awards = ({ title, awards }) => {
  return (
    <StyledAwards>
      <h1>{title || 'Awards we are proud of'}</h1>

      <div>
        {awards.map(award => (
          <Award>
            <a href={award.link}>
              <div>
                <img src={award.image} alt="award" />
              </div>
              <h4>{award.description}</h4>
            </a>
          </Award>
        ))}
      </div>
    </StyledAwards>
  );
};

export default Awards;
