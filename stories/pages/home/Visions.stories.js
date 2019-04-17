import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StyledVisions, Vision } from '../../../components/Home/Visions';
import Container from '../../../components/Container';

storiesOf('Page Specific|Home/Visions', module)
  .add('single', () => (
    <Container style={{ paddingTop: '2rem' }}>
      <Vision
        image="https://via.placeholder.com/300"
        description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
      />
    </Container>
  ))
  .add('list', () => (
    <StyledVisions>
      <h1>Visions</h1>

      <div>
        <Vision
          image="https://via.placeholder.com/300"
          description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
        />
        <Vision
          image="https://via.placeholder.com/300"
          description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
        />
        <Vision
          image="https://via.placeholder.com/300"
          description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
        />
        <Vision
          image="https://via.placeholder.com/300"
          description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
        />
      </div>
    </StyledVisions>
  ));
