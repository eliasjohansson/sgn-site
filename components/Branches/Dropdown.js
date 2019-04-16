import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icons';

const StyledDropdown = styled.div`
  width: 100%;
  max-width: 343px;
  button {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colorPrimary};
    background: none;
    padding: 0.8rem 1rem;
    width: 100%;
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: 0;
    transition: 0.3s ease;
    cursor: pointer;

    svg {
      margin-top: -8px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colorPrimary};
      color: ${({ theme }) => theme.colorWhite};
      svg rect {
        fill: ${({ theme }) => theme.colorWhite};
      }
    }
  }

  ul {
    background-color: ${({ theme }) => theme.colorWhite};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colorGrey};
    border-top: 0;
    position: absolute;
    width: 100%;
    z-index: 100;
    transform-origin: top;
    transform: ${({ focused }) => (focused ? 'scaleY(1)' : 'scaleY(0)')};
    transition: 0.3s ease;

    li {
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.colorGrey};
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        background-color: ${({ theme }) => theme.colorPrimary};
        color: ${({ theme }) => theme.colorWhite};
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;

const Dropdown = ({ branches, setSelectedBranch, selectedBranch }) => {
  const [focused, setFocused] = useState(false);
  return (
    <StyledDropdown focused={focused}>
      <button onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        <span>{selectedBranch}</span>
        <Icon symbol="arrow" />
      </button>

      <ul>
        {branches.map(({ node: branch }) => (
          <li
            onMouseDown={() => {
              setSelectedBranch(branch.title);
            }}
          >
            {branch.title}
          </li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
