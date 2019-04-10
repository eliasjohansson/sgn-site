import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

const Styledbranch = styled.div``;

const branch = withRouter(props => {
  return (
    <Styledbranch>
      <h1>Branch</h1>
      <p>{props.lang}</p>
      <p>Branch ID: {props.router.query.id}</p>
    </Styledbranch>
  );
});

export default branch;
