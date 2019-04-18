import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StyledPartners, Partner } from '../../../components/Home/Partners';
import ProjectCard from '../../../components/Home/Projects/ProjectCard';
import Container from '../../../components/Container';

storiesOf('Page Specific|Home/Partners', module)
  .add('single card', () => (
    <Container style={{ paddingTop: '2rem' }}>
      <Partner>
        <img
          src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
          alt=""
        />
      </Partner>
    </Container>
  ))
  .add('list', () => (
    <StyledPartners>
      <h1>Our Partners</h1>
      <div>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
        <Partner>
          <img
            src="https://www.supportgroup.se/wp-content/uploads/2018/02/Restad_logo.png"
            alt=""
          />
        </Partner>
      </div>
    </StyledPartners>
  ));
