import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';

// Components
import SingleCollab from '../components/SingleCollaboration';

const StyledCollaboration = styled.div``;

const Collaboration = withRouter(props => {
  return (
    <StyledCollaboration>
      <SingleCollab />
    </StyledCollaboration>
  );
});

export default Collaboration;