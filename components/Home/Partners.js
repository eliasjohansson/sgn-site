import React from 'react';
import styled from 'styled-components';
import Section from '../Section';

export const StyledPartners = styled(Section)`
  background-color: ${({ theme }) => theme.colorWhite};

  > div {
    h1 {
      margin: 0 0 5rem 0;
    }
    > div {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem 1rem;

      @media screen and (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 5rem;
      }

      @media screen and (min-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export const Partner = styled.div`
  img {
    width: 100%;
  }
`;

const Partners = ({ partners }) => {
  return (
    <StyledPartners>
      <h1>Our Partners</h1>
      <div>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
      </div>
    </StyledPartners>
  );
};

export default Partners;
