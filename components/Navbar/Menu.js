import React, { useState } from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import routes, { Link } from '../../routes';

// Components
import Hamburger from './Hamburger';
import { MobileLang } from './Language';

const StyledMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  flex-direction: column;
  position: absolute;
  top: 64px;
  right: 0px;
  width: 100%;
  max-width: 400px;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.colorWhite};
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.3s ease;

  ul {
    width: 100%;
    margin: auto 0;
    li {
      width: 100%;
      display: flex;
      justify-content: center;
      font: ${({ theme }) => theme.fontMobileH2};
      a {
        padding: 1.25rem;
        color: ${({ theme }) => theme.colorDarkGrey};
        text-decoration: none;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (min-width: 900px) {
    transform: translateX(0%);
    transition: 0s ease;
    flex-direction: row;
    position: static;
    background-color: none;
    max-width: 100%;
    width: auto;
    height: 100%;
    padding-right: 12rem;

    ul {
      height: 100%;
      display: flex;
      li {
        font: ${({ theme }) => theme.fontDesktopH4};
        margin-left: 2rem;
        height: 100%;
        a {
          padding: 0;
        }
      }
    }
  }

  @media screen and (min-width: 1450px) {
    padding-right: 0px;
  }
`;

const Menu = ({ open, router, lang }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link route="index" params={{ lang: lang }}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link route="branches" params={{ lang: lang }}>
            <a>Locations</a>
          </Link>
        </li>
        <li>
          <Link route="collaborations" params={{ lang: lang }}>
            <a>Collaborations</a>
          </Link>
        </li>
        <li>
          <Link route="donate" params={{ lang: lang }}>
            <a>Donate</a>
          </Link>
        </li>
        <li>
          <Link route="news" params={{ lang: lang }}>
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link route="membership" params={{ lang: lang }}>
            <a>Membership</a>
          </Link>
        </li>
      </ul>

      <MobileLang>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </MobileLang>
    </StyledMenu>
  );
};

export default withRouter(Menu);
