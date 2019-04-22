import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Link } from '../../routes';
import Icon from '../Icons';

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

export const DesktopLang = withRouter(({ lang, languages, router }) => {
  const [focused, setFocused] = useState(false);

  return (
    <StyledDesktopLang
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      focused={focused}
    >
      <span>
        {languages[languages.map(l => l.slug).indexOf(lang)].name.slice(0, 3)}
      </span>
      <ul>
        {languages.map(l => (
          <li>
            <Link
              route={`/${lang}/${
                router.route === '/'
                  ? '/'
                  : router.route.slice(1) /* Slice to remove "/" */
              }`}
            >
              <a>{l.name.slice(0, 3)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledDesktopLang>
  );
});

const StyledMobileLang = styled.div`
  width: 100%;

  button {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colorGrey};
    font: ${({ theme }) => theme.fontMobileP};
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colorWhite};
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: flex; 
    justify-content: center;
    align-items: center;

    svg {
      margin-right: .5rem;
    }
  }

  ul {
    background-color: ${({ theme }) => theme.colorWhite};
    border-radius: 2px;
   /*  border: 1px solid ${({ theme }) => theme.colorGrey}; */
    border-top: 0;
    position: absolute;
    bottom: 100%;
    right: 0;
    width: 100%;
    z-index: 100;
    transform-origin: bottom;
    transform: ${({ focused }) => (focused ? 'scaleY(1)' : 'scaleY(0)')};
    transition: 0.3s ease;
    

    li {
      border-top: 1px solid ${({ theme }) => theme.colorGrey};
      cursor: pointer;
      transition: 0.3s ease;
      position: relative;
      overflow: auto;
      color: ${({ theme }) => theme.colorDarkGrey};
      font: ${({ theme }) => theme.fontMobileP};
      &:hover {
        background-color: ${({ theme }) => theme.colorPrimary};
        color: ${({ theme }) => theme.colorWhite};
      }
      a {
        color: inherit;
        text-decoration: none;
        width: 100%;
        display: inline-block;
        padding: 1rem 1rem;
      }
    }
  }

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const MobileLang = withRouter(({ lang, languages, router }) => {
  const [focused, setFocused] = useState(false);
  return (
    <StyledMobileLang
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      focused={focused}
    >
      <button>
        <Icon symbol="globe" />
        <span>{languages[languages.map(l => l.slug).indexOf(lang)].name}</span>
      </button>

      <ul>
        {languages.map(l => (
          <li>
            <Link
              route={`/${lang}/${
                router.route === '/'
                  ? '/'
                  : router.route.slice(1) /* Slice to remove "/" */
              }`}
            >
              <a>{l.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledMobileLang>
  );
});
