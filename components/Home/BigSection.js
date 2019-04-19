import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import Section from '../Section';

const StyledBigSection = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  padding: 10rem 0;

  @media screen and (max-width: 900px) {
    padding: 5rem 0;
    flex-direction: ${({ reversed }) =>
      reversed ? 'column-reverse' : 'column'};
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  flex: 1;

  > div {
    width: 110%;
    padding-bottom: 75%;
    ${({ reversed }) => reversed && 'margin-left: -10%;'};
    position: relative;
    > img {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 900px) {
    > div {
      margin: 0;
      width: 100%;
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ reversed }) => (reversed ? 'flex-end' : 'flex-start')};

  > div {
    max-width: calc(595px - 10%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${({ reversed }) => (reversed ? '0 3rem 0 0' : '0 0 0 3rem')};
    margin: ${({ reversed }) => (reversed ? '0 10% 0 0' : '0 0 0 10%')};
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 1190px) {
    padding: ${({ reversed }) => (reversed ? '0 0 0 1rem' : '0 1rem 0 0')};
  }

  @media screen and (max-width: 900px) {
    padding: ${({ reversed }) => (reversed ? '0 0 2rem 0' : '2rem 0 0 0')};
    > div {
      padding: 0 1rem;
      margin: 0;
      max-width: 100%;

      h1 {
        margin-top: 0;
        margin-bottom: 1rem;
      }
    }
  }
`;

const BigSection = ({ image, children, reversed }) => {
  return (
    <StyledBigSection reversed={reversed}>
      <ImageContainer reversed={reversed}>
        <div>
          <img src={image} alt="" />
        </div>
      </ImageContainer>

      <ContentContainer reversed={reversed}>
        <div>{children}</div>
      </ContentContainer>
    </StyledBigSection>
  );
};

export default BigSection;
