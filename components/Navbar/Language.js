import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Link } from '../../routes';

const StyledDesktopLang = styled.div`
  padding: 0 2rem;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorDarkGrey};
  font: ${({ theme }) => theme.fontDesktopH4};

  span {
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DesktopLang = withRouter(({ lang, router }) => {
  return (
    <StyledDesktopLang>
      <span>Eng</span>
      <ul>
        <li>
          <Link
            route={
              router.route === '/'
                ? 'index'
                : router.route.slice(1) /* Slice to remove "/" */
            }
            params={{ lang: 'en' }}
          >
            <a>Eng</a>
          </Link>
        </li>
        <li>
          <Link
            route={router.route === '/' ? 'index' : router.route.slice(1)}
            params={{ lang: 'sv' }}
          >
            <a>Swe</a>
          </Link>
        </li>
      </ul>
    </StyledDesktopLang>
  );
});

export const MobileLang = styled.div`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colorGrey};
  font: ${({ theme }) => theme.fontMobileP};
  width: 100%;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    text-align: center;
  }

  svg {
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;
