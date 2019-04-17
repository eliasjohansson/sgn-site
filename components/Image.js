import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  min-height: ${({ height }) => height || '100px'};
  width: ${({ width }) => width || '100px'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0px'};
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: ;
  }
`;

const Image = props => {
  const {
    src,
    alt,
    imgStyle,
    width,
    height,
    paddingBottom,
    style,
    className
  } = props;

  return (
    <StyledImage
      width={width}
      height={height}
      paddingBottom={paddingBottom}
      style={style}
      className={className}
    >
      <img src={src} alt={alt || ''} {...imgStyle} />
    </StyledImage>
  );
};

export default Image;
