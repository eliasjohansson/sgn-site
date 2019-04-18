import React from 'react';
import styled from 'styled-components';

// Components
import ProjectCard from './ProjectCard';
import Section from '../../Section';

export const StyledProjects = styled(Section)`
  > div {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;

    @media screen and (max-width: 900px) {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: auto;
    }
  }
`;

const Projects = props => {
  return (
    <StyledProjects>
      <ProjectCard
        image={{ src: 'https://via.placeholder.com/500' }}
        title="Title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis
          expedita delectus asperiores. Cumque ab, qui accusamus eaque
          consequuntur animi fugit velit tempore tenetur possimus perspiciatis
          esse, blanditiis optio in."
        collaborationId="1"
      />
      <ProjectCard
        image={{ src: 'https://via.placeholder.com/500' }}
        title="Title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis
          expedita delectus asperiores. Cumque ab, qui accusamus eaque
          consequuntur animi fugit velit tempore tenetur possimus perspiciatis
          esse, blanditiis optio in."
        collaborationId="1"
      />
    </StyledProjects>
  );
};

export default Projects;
