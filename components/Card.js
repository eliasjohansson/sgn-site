import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colorWhite};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
`;

export default Card;
