import React from 'react';
import styled from 'styled-components';

const StyledActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  text-align: center;

  img {
    margin-bottom: 1rem;
    object-fit: cover;
    object-position: center;
    width: 160px;
    height: 160px;
  }
  h3 {
    margin-bottom: 0.5rem;
    font: ${({ theme }) => theme.fontMobileH3};
  }
  p {
    font: ${({ theme }) => theme.fontMobileP};
  }
`;

const Activity = ({ image, title, description }) => {
  return (
    <StyledActivity>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledActivity>
  );
};

export default Activity;
