import React from 'react';
import styled from 'styled-components';

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
        height="26"
        viewBox="0 0 89 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.694092" width="24.8372" height="23.5412" fill="#008484" />
        <path
          d="M76.5817 0.694092L64.1631 24.2353H89.0003L76.5817 0.694092Z"
          fill="#F98251"
        />
        <ellipse
          cx="46.0523"
          cy="12.9551"
          rx="12.936"
          ry="12.261"
          fill="#F7E757"
        />
      </svg>
    </StyledLogo>
  );
};

export default Logo;
