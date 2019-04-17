import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Container from '../Container';
import Section from '../Section';

export const StyledAwards = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};
  > div {
    overflow-x: hidden;
    > div {
      margin-top: 5rem;
      display: grid;
      grid-template-rows: repeat(auto-fill, max-content);
      grid-template-columns: repeat(4, 1fr);
      row-gap: 1.5rem;
      column-gap: 1.5rem;
      overflow-x: scroll;
    }
  }
`;

export const Award = styled(Card)`
  min-width: 250px;
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
    }
  }

  h4 {
    padding: 1.5rem 1rem;
    text-align: center;
  }
`;

const Awards = props => {
  return (
    <StyledAwards>
      <Container>
        <h1>Awards we are proud of</h1>

        <div>
          <Award>
            <div>
              <img src="" alt="" />
            </div>
            <div />
          </Award>
        </div>
      </Container>
    </StyledAwards>
  );
};

export default Awards;
