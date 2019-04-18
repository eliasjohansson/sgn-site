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
      <h1>Awards we are proud of</h1>

      <div>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
      </div>
    </StyledAwards>
  );
};

export default Awards;
