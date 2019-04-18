import React from "react";
import styled from "styled-components";

const StyledDonations = styled.div``;

const Donations = props => {
  return (
    <StyledDonations>
      <h1>Donations</h1>
      <p>{props.lang}</p>
    </StyledDonations>
  );
};

export default Donations;
