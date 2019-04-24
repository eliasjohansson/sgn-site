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
  display: flex;
  align-items: center;
  img {
    width: 100%;
    max-height: 100px;
    object-fit: contain;

    @media screen and (max-width: 600px) {
      max-height: 75px;
    }
  }
`;

const Partners = ({ title, partners }) => {
  return (
    <StyledPartners>
      <h1>{title || 'Our Partners'}</h1>
      <div>
        {partners.map(partner => (
          <Partner>
            <img src={partner.logo} alt={partner.name} />
          </Partner>
        ))}
      </div>
    </StyledPartners>
  );
};

export default Partners;
