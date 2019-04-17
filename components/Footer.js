import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Icon from './Icons';
import { Link } from '../routes';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colorDarkGrey};
  color: ${({ theme }) => theme.colorWhite};

  ${Container} {
    padding-top: 3rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(3, max-content);
  }

  @media screen and (min-width: 900px) {
    ${Container} {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
`;

const Contact = styled.div`
  font-size: 15px;

  h2 {
    margin: 0;
  }

  > ul {
    margin: 1rem 0;
  }

  address {
    font-style: normal;
  }

  @media screen and (min-width: 900px) {
    grid-row: 2 / 3;
    text-align: center;
    h2 {
      display: none;
    }
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  svg {
    margin-bottom: 2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    grid-row: 1 / 2;
    justify-content: center;

    svg {
      margin-right: 3rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Nav = styled.nav`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding-top: 5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      position: relative;
      border-right: 1px solid ${({ theme }) => theme.colorGrey};
      &:last-child {
        border-right: none;
      }
      a {
        white-space: nowrap;
        padding: 0px 1rem;
        height: 100%;
        width: 100%;
        color: ${({ theme }) => theme.colorGrey};
        text-decoration: none;
        font: ${({ theme }) => theme.fontSmall};
      }
    }
  }

  @media screen and (min-width: 900px) {
    grid-row: 3 / 4;
    padding-top: 4rem;
  }
`;

const Copyright = styled.div`
  padding-top: 1rem;
  text-align: center;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font: ${({ theme }) => theme.fontSmall};

  span {
    display: block;
    margin-bottom: 3px;
  }

  @media screen and (min-width: 900px) {
    grid-row: 4 / 5;
  }
`;

const Footer = ({ lang }) => {
  return (
    <StyledFooter>
      <Container>
        <Contact>
          <h2>Contact</h2>
          <ul>
            <li>
              <b>info@supportgroup.se</b>
            </li>
            <li>
              <b>+4676-884 08 84</b>
            </li>
          </ul>
          <address>
            <ul>
              <li>Kungsladugårdsvägen 5</li>
              <li>Restad Gård, 462 54 Vänersborg</li>
              <li>Sweden</li>
            </ul>
          </address>
        </Contact>
        <Social>
          <Icon symbol="instagram" />
          <Icon symbol="facebook" />
          <Icon symbol="youtube" />
        </Social>
        <Nav>
          <ul>
            <li>
              <Link route="private-policy">
                <a>Private Policy</a>
              </Link>
            </li>
            <li>
              <Link route="cookies">
                <a>Cookies</a>
              </Link>
            </li>
            <li>
              <Link route="login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link route="graphic-identity">
                <a>Graphic Identity</a>
              </Link>
            </li>
          </ul>
        </Nav>
        <Copyright>
          <small>
            <span>Copyright © 2019 Support Group Network</span>
            <span>Org.nmr : 0128312083801</span>
          </small>
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
