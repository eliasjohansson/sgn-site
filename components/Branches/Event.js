import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledEvent = styled.a`
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.colorWhite};
  text-decoration: none;
  display: block;
  width: 100%;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  > div {
    display: flex;
    padding: 1rem;

    h2 {
      color: ${({ theme }) => theme.colorPrimary};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
    }
  }
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Month = styled.span`
  font: ${({ theme }) => theme.fontMobileH3};
  color: ${({ theme }) => theme.colorPrimary};
  margin-bottom: 3px;
`;

const Day = styled.span`
  font: ${({ theme }) => theme.fontMobileH1};
  color: ${({ theme }) => theme.colorDarkGrey};
`;

const Event = ({ image, date, title, link }) => {
  return (
    <StyledEvent href={link}>
      <img src={image} alt="" />
      <div>
        <DateBox>
          <Month>
            {moment()
              .format('MMM')
              .toLowerCase()}
          </Month>
          <Day>{moment().format('D')}</Day>
        </DateBox>
        <h2>{title}</h2>
      </div>
    </StyledEvent>
  );
};

export default Event;
