import React from 'react';
import styled from 'styled-components';

const StyledCollaborations = styled.div``;

const Collaborations = props => {
  return (
    <StyledCollaborations>
      <h1>Collaborations</h1>
      <p>{props.lang}</p>
    </StyledCollaborations>
  );
};

export default Collaborations;
