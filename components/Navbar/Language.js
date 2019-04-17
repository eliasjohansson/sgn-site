import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Link } from '../../routes';

const StyledDesktopLang = styled.button`
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
  cursor: pointer;
  border: none;
  outline: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorWhite};
  }

  span {
  }

  ul {
    background-color: ${({ theme }) => theme.colorWhite};
    border-radius: 2px;
   /*  border: 1px solid ${({ theme }) => theme.colorGrey}; */
    border-top: 0;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    z-index: 100;
    transform-origin: top;
    transform: ${({ focused }) => (focused ? 'scaleY(1)' : 'scaleY(0)')};
    transition: 0.3s ease;

    li {
      border-bottom: 1px solid ${({ theme }) => theme.colorGrey};
      cursor: pointer;
      transition: 0.3s ease;
      position: relative;
      overflow: auto;
      color: ${({ theme }) => theme.colorDarkGrey};
      &:hover {
        background-color: ${({ theme }) => theme.colorPrimary};
        color: ${({ theme }) => theme.colorWhite};
      }
      &:last-child {
        border-bottom: 0;
      }
      a {
        color: inherit;
        text-decoration: none;
        width: 100%;
        display: inline-block;
        padding: 0.5rem 1rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DesktopLang = withRouter(({ lang, router }) => {
  const [focused, setFocused] = useState(true);
  return (
    <StyledDesktopLang
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      focused={focused}
    >
      <span>{lang}</span>
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
