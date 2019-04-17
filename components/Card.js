import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  text-align: left;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: inherit;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  & p {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 900px) {
    & {
      max-width: 40%;
    }
  }
`;
const StyledCard = styled.div`
  width: 100%;
  margin: 5rem 0;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-rows: repeat(2, auto);
  background-color: ${({ theme }) => theme.colorLightGrey};
  img {
    height: 50vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
  a {
    color: ${({ theme }) => theme.colorPrimary};
    text-decoration: none;
    & :visited {
      color: ${({ theme }) => theme.colorPrimary};
    }
  }
  @media screen and (min-width: 900px) {
    & {
      grid-template-rows: repeat(1, auto);
      grid-template-columns: repeat(2, 60%);
    }
    & img {
      min-width: 60%;
      min-height: 100%;
    }
  }
`;

const Card = props => {
  return (
    <Container fluid>
      <StyledCard>
        <img src="https://dummyimage.com/1024x720/fff/aaa" alt="" />
        <ContentWrapper>
          <h1>H1 Headline</h1>
          <p>
            Support Group Network (SGN) är en ideell förening som formats av
            asylsökande i samarbete med det svenska samhället i syfte att hjälpa
            andra asylsökande, flyktingar.
          </p>
          <Wrapper>
            {props.children}
            {/* {props.withLink && (
              <a className="link" href="#">
                Read more ➤
              </a>
            )} */}
          </Wrapper>
        </ContentWrapper>
      </StyledCard>
    </Container>
  );
};

export default Card;
