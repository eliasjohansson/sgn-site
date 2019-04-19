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

const Collab = props => {
  return (
    <StyledCollab>
      <h1>Current Projects</h1>
      <Grid>
        <StyledCard>
          <Link
            params={{ lang: props.lang, id: 'string' }}
            route="collaboration"
          >
            <a>
              <h2>Projname</h2>
              <ImageBox>
                <img src="https://via.placeholder.com/4180x500" />
              </ImageBox>
            </a>
          </Link>
        </StyledCard>
        <StyledCard>
          <Link params={{ lang: props.lang, id: 'tva' }} route="collaboration">
            <a>
              <h2>Projname</h2>
              <ImageBox>
                <img src="https://via.placeholder.com/480x600" />
              </ImageBox>
            </a>
          </Link>
        </StyledCard>
        <StyledCard>
          <Link params={{ lang: props.lang, id: 'tjo' }} route="collaboration">
            <a>
              <h2>Projname</h2>
              <ImageBox>
                <img src="https://via.placeholder.com/480x1300" />
              </ImageBox>
            </a>
          </Link>
        </StyledCard>
        <StyledCard>
          <Link params={{ lang: props.lang, id: 'bla' }} route="collaboration">
            <a>
              <h2>Projname</h2>
              <ImageBox>
                <img src="https://via.placeholder.com/480x300" />
              </ImageBox>
            </a>
          </Link>
        </StyledCard>
      </Grid>
    </StyledCollab>
  );
};
export default Collab;
