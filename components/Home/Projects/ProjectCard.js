import React from 'react';
import styled from 'styled-components';

// Components
import { Link } from '../../../routes';
import Card from '../../Card';

const StyledProjectCard = styled(Card)`
  position: relative;
  height: 100%;
`;

const ContentBox = styled.div`
  padding: 1rem;

  h1 {
    margin: 2rem 0 1.5rem 0;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ImageBox = styled.div`
  height: 300px;
  img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ProjectCard = ({
  lang,
  image: { src, alt },
  title,
  description,
  collaborationId
}) => {
  return (
    <StyledProjectCard>
      <ImageBox>
        <img src={src} alt={alt || ''} />
      </ImageBox>
      <ContentBox>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link route="collaboration" params={{ lang, id: collaborationId }}>
          <a>Read more</a>
        </Link>
      </ContentBox>
    </StyledProjectCard>
  );
};

export default ProjectCard;
