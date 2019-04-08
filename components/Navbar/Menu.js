import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../routes';
import Hamburger from './Hamburger';
import Language from './Language';

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
      font-size: 24px;
      font-weight: bold;
      font-family: 'Montserrat', sans-serif;
      a {
        padding: 1rem;
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
    transition: 0s;
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
        font-size: 1rem;
        font-weight: normal;
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

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link route="home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link route="branches">
            <a>Branches</a>
          </Link>
        </li>
        <li>
          <Link route="collaborations">
            <a>Collab</a>
          </Link>
        </li>
        <li>
          <Link route="news">
            <a>News</a>
          </Link>
        </li>
        <li>
          <Link route="donate">
            <a>Donate</a>
          </Link>
        </li>
        <li>
          <Link route="membership">
            <a>Membership</a>
          </Link>
        </li>
      </ul>

      {/*  <Language>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM14.6667 8C14.6667 8.45667 14.62 8.90267 14.532 9.33333H11.9633C12.044 8.478 12.0493 7.586 11.9633 6.66667H14.532C14.62 7.09733 14.6667 7.54333 14.6667 8ZM14.106 5.33333H11.7727C11.5173 4.02667 11.0713 2.83267 10.474 1.81467C12.0973 2.466 13.4053 3.736 14.106 5.33333ZM10.4033 5.33333H8.66667V1.56133C9.47667 2.53467 10.078 3.83467 10.4033 5.33333ZM7.33333 1.56133V5.33333H5.59667C5.922 3.83467 6.52333 2.53467 7.33333 1.56133ZM7.33333 6.66667V9.33333H5.38C5.28267 8.386 5.28267 7.61533 5.38 6.66667H7.33333ZM7.33333 10.6667V14.4387C6.52333 13.4653 5.922 12.1653 5.59667 10.6667H7.33333ZM8.66667 14.4387V10.6667H10.4033C10.078 12.1653 9.47667 13.4653 8.66667 14.4387ZM8.66667 9.33333V6.66667H10.62C10.7173 7.614 10.7173 8.38467 10.62 9.33333H8.66667ZM5.526 1.81467C4.92867 2.83267 4.48267 4.02667 4.22733 5.33333H1.894C2.59467 3.736 3.90267 2.466 5.526 1.81467ZM1.468 6.66667H4.03667C3.956 7.522 3.95067 8.414 4.03667 9.33333H1.468C1.38 8.90267 1.33333 8.45667 1.33333 8C1.33333 7.54333 1.38 7.09733 1.468 6.66667ZM1.894 10.6667H4.22733C4.48267 11.9733 4.92867 13.1673 5.526 14.1853C3.90267 13.534 2.59467 12.264 1.894 10.6667ZM10.474 14.1853C11.0713 13.1673 11.5173 11.9733 11.7727 10.6667H14.106C13.4053 12.264 12.0973 13.534 10.474 14.1853Z"
            fill="#393939"
          />
        </svg>
        English
      </Language> */}
    </StyledMenu>
  );
};

export default Menu;
