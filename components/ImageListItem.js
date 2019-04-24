import React from "react";
import styled from "styled-components";

const StyledImageListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  text-align: center;

  > div {
    height: 160px;
    width: 160px;
    margin-bottom: 1rem;
    img {
      max-height: 80%;
      object-fit: contain;
      object-position: 50% 50%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    margin-bottom: 0.5rem;
    font: ${({ theme }) => theme.fontMobileH3};
  }
  p {
    font: ${({ theme }) => theme.fontMobileP};
  }
`;

const ImageListItem = props => {
  const { image, title, description } = props;
  return (
    <StyledImageListItem {...props}>
      <div>
        <img src={image} alt="" />
      </div>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </StyledImageListItem>
  );
};

export default ImageListItem;
