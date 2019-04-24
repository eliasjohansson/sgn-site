import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Button from './Button';
import LinkButton from './LinkButton';
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
    filter: brightness(0.75);
  }
  ${Container} {
    display: grid;
  }
  .wrapper {
    margin-top: calc(-145.1px + -10rem);
  }
  @media screen and (max-width: 900px) {
    img {
      height: 100%;
    }
    & ${Container} {
      justify-content: center;
    }
  }
`;
const Hero = ({ lang, image, title, button }) => {
  return (
    <StyledHero>
      <img src={image} />
      <div className="wrapper">
        <Container>
          <h1
            style={{ lineHeight: '120%' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <LinkButton
            external
            href={`/${lang}${
              button.link_type === 'Internal'
                ? button.internal_link
                : button.external_link
            }`}
          >
            {button.label}
          </LinkButton>
        </Container>
      </div>
    </StyledHero>
  );
};

export default Hero;
