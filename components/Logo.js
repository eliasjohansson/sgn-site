import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  margin-right: auto;

  align-items: center;
  justify-content: center;
`;

const Logo = props => {
  return (
    <StyledLogo>
      <svg
        width="89"
        height="25"
        viewBox="0 0 89 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="#22D5BF" />
        <path d="M44 0L32 24H56L44 0Z" fill="#EB5757" />
        <circle cx="76.5" cy="12.5" r="12.5" fill="#F4CB47" />
      </svg>
    </StyledLogo>
  );
};

export default Logo;
