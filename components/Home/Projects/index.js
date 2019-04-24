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

const Projects = ({ lang, data }) => {
  console.log(data);
  return (
    <StyledProjects>
      <ProjectCard
        lang={lang}
        image={{ src: data.card_1.image }}
        title={data.card_1.title}
        description={data.card_1.text}
        link={data.card_1.link_button}
      />
      <ProjectCard
        lang={lang}
        image={{ src: data.card_2.image }}
        title={data.card_2.title}
        description={data.card_2.text}
        link={data.card_2.link_button}
      />
    </StyledProjects>
  );
};

export default Projects;
