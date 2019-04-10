import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

const StyledNews = styled.div``;

const News = props => {
  return (
    <StyledNews>
      <h1>News</h1>
      {props.lang}
    </StyledNews>
  );
};

export default News;
