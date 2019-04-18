import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StyledProjects } from '../../../components/Home/Projects/';
import ProjectCard from '../../../components/Home/Projects/ProjectCard';
import Container from '../../../components/Container';

storiesOf('Page Specific|Home/Projects', module)
  .add('single card', () => (
    <Container style={{ paddingTop: '2rem', height: '700px', width: '500px' }}>
      <ProjectCard
        image={{ src: 'https://via.placeholder.com/500' }}
        title="Title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio debitis
          expedita delectus asperiores. Cumque ab, qui accusamus eaque
          consequuntur animi fugit velit tempore tenetur possimus perspiciatis
          esse, blanditiis optio in."
        collaborationId="1"
      />
    </Container>
  ))
  .add('list', () => (
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
  ));
