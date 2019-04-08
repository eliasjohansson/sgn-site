import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  max-height: 20px;
  width: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  -webkit-backface-visibility: hidden;

  span {
    -webkit-backface-visibility: hidden;
    width: 32px;
    height: 3px;
    background-color: ${({ color }) => color || '#000'};

    transition: ${({ cross }) => {
      return cross
        ? 'top 0.2s ease, bottom 0.2s ease, transform 0.2s ease 0.2s'
        : 'top 0.2s ease 0.2s, bottom 0.2s ease 0.2s, transform 0.2s ease ';
    }};
    position: absolute;
  }
  span:nth-child(1) {
    top: ${({ cross }) => (cross ? '9px' : '0px')};
    transform: ${({ cross }) => (cross ? 'rotateZ(45deg)' : 'rotateZ(0deg)')};
  }
  span:nth-child(2) {
    top: 9px;
    transform: ${({ cross }) => (cross ? 'scaleX(0)' : 'scaleX(1)')};
    transition: 0;
  }
  span:nth-child(3) {
    top: ${({ cross }) => (cross ? '9px' : '17px')};
    transform: ${({ cross }) => (cross ? 'rotateZ(-45deg)' : 'rotateZ(0deg)')};
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
