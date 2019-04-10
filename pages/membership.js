import React from 'react';
import styled from 'styled-components';

const StyledMembership = styled.div``;

const Membership = props => {
  return (
    <StyledMembership>
      <h1>Membership</h1>
      <p>{props.lang}</p>
    </StyledMembership>
  );
};

export default Membership;
