import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  height: 100%;
  width: 64px;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const Hamburger = props => {
  const { cross } = props;
  return (
    <StyledHamburger {...props}>
      {cross ? (
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="1"
            width="28"
            height="3"
            transform="rotate(45 3 1)"
            fill="#393939"
          />
          <rect
            x="23"
            y="3"
            width="28"
            height="3"
            transform="rotate(135 23 3)"
            fill="#393939"
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="28" height="3" fill="#393939" />
          <rect y="10.5446" width="28" height="3" fill="#393939" />
          <rect y="21.0892" width="28" height="3" fill="#393939" />
        </svg>
      )}
    </StyledHamburger>
  );
};

export default Hamburger;
