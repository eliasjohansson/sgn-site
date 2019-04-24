import React from 'react';
import { Link } from '../routes';
import styled from 'styled-components';
import Section from './Section';
import Card from './Card';

const StyledCollab = styled(Section)``;

const StyledCard = styled(Card)`
  > a {
    width: 100%;
    height: 100%;
    display: flex;
    color: ${({ theme }) => theme.colorDarkGrey};
  }

  h2 {
    align-self: flex-end;
    position: absolute;
    z-index: 10;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 40vh;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Collab = ({ title, collabs, lang }) => {
  return (
    <StyledCollab>
      <h1>{title}</h1>
      <Grid>
        {collabs.map(({ node }) => (
          <StyledCard>
            <Link params={{ lang: lang, id: node.title }} route="collaboration">
              <a>
                <h2>{node.title}</h2>
                <ImageBox>
                  <img src={node.acf.image} />
                </ImageBox>
              </a>
            </Link>
          </StyledCard>
        ))}
      </Grid>
    </StyledCollab>
  );
};
export default Collab;
