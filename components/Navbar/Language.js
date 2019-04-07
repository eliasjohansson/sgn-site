import styled from 'styled-components';

const Lang = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 64px;
  padding: 0 1rem;
  display: none;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export default Lang;
