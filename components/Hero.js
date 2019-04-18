import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Button from './Button';
const StyledHero = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  h1 {
    color: white;
  }
  img {
    z-index: -1;
    object-fit: cover;
    width: 100%;
    height: calc(100vh - 64px);
  }
  .overlay::after {
    display: block;
    position: relative;
    background-image: linear-gradient(to bottom, transparent 0%, black 100%);
    margin-top: -200px;
    height: 200px;
    width: 100%;
    content: '';
  }
  ${Container} {
    display: grid;
  }
  .wrapper {
    margin-top: -200px;
  }
  @media screen and (max-width: 900px) {
    img {
      height: 60vh;
    }
    & ${Container} {
      justify-content: center;
    }
  }
`;
const Hero = ({ image }) => {
  return (
    <StyledHero>
      <div className="overlay">
        <img src={image} />
      </div>
      <div className="wrapper">
        <Container>
          <h1>H1 Header</h1>
          <Button />
        </Container>
      </div>
    </StyledHero>
  );
};

export default Hero;
