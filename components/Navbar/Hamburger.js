import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  height: 20px;
  width: 32px;
  position: relative;

  span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colorDarkGrey};
    transition: 0.3s ease;
  }

  span:nth-child(1) {
    transform: ${({ cross }) =>
      cross ? 'translateY(9px) rotateZ(-45deg)' : 'translateY(0px)'};
  }
  span:nth-child(2) {
    transform: ${({ cross }) =>
      cross ? 'translateY(9px) scaleX(0)' : 'translateY(9px)'};
  }
  span:nth-child(3) {
    transform: ${({ cross }) =>
      cross ? 'translateY(9px) rotateZ(45deg)' : 'translateY(17px)'};
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const Hamburger = props => {
  return (
    <StyledHamburger {...props}>
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export default Hamburger;
