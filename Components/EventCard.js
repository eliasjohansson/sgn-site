import React from "react";
import styled from "styled-components";

const StyledEventCard = styled.div`
  font-family: "Roboto";
`;

const EventCard = props => {
  return (
    <StyledEventCard>
      <h1>H1 Headline</h1>
    </StyledEventCard>
  );
};

export default EventCard;
