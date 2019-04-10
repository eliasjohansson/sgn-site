import React from 'react';
import styled from 'styled-components';

const StyledBranches = styled.div``;

const Branches = props => {
  return (
    <StyledBranches>
      <h1>Branches</h1>
      <p>{props.lang}</p>
    </StyledBranches>
  );
};

export default Branches;
