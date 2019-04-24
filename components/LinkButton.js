import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from '../routes';
import { buttonStyle } from './Button';

const StyledExternalLinkButton = styled.a`
  ${buttonStyle}
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInternalLinkButton = styled(Link)`
  ${buttonStyle}
`;

const ExternalLinkButton = props => {
  return (
    <StyledExternalLinkButton {...props}>
      {props.children}
    </StyledExternalLinkButton>
  );
};

const InternalLinkButton = props => {
  return (
    <StyledInternalLinkButton {...props}>
      <a>{props.children}</a>
    </StyledInternalLinkButton>
  );
};

const LinkButton = props => {
  return props.external ? (
    <ExternalLinkButton {...props} />
  ) : (
    <InternalLinkButton {...props} />
  );
};

export default LinkButton;
