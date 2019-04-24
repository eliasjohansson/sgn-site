import React from 'react';
import styled from 'styled-components';
import Section from '../Section';
import ImageListItem from '../ImageListItem';

export const StyledVisions = styled(Section)`
  > div > div {
    margin-top: 5rem;
    display: grid;
    grid-template-rows: repeat(auto-fill, max-content);
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2.5rem;
    column-gap: 0.5rem;

    > div {
      justify-self: center;
    }

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const Vision = styled(ImageListItem)`
  p {
    color: #535353;
  }
`;

const Visions = ({ title, visions }) => {
  return (
    <StyledVisions>
      <h1>{title}</h1>
      <div>
        {visions.map(vision => (
          <Vision image={vision.image} description={vision.text} />
        ))}
      </div>
    </StyledVisions>
  );
};

export default Visions;
