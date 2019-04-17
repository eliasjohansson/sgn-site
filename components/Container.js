import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: ${props => !props.fluid && "0  1rem"};
  margin: 0 auto;

  @media screen and (min-width: 1190px) {
    max-width: 1190px;
  }
`;

export default Container;
