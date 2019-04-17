import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const StyledSection = styled.div`
  padding: 5rem 0;
`;

const Section = props => {
  return (
    <StyledSection {...props}>
      <Container>{props.children}</Container>
    </StyledSection>
  );
};

export default Section;
