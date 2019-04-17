import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ImageListItem from '../components/ImageListItem';
import { Activities } from '../components/Branches/SelectedBranch';
import Container from '../components/Container';

storiesOf('Shared | Image List Item', module)
  .add('single', () => (
    <ImageListItem
      image="https://via.placeholder.com/160"
      title="Welcome Gatherings"
      description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
    />
  ))
  .add('list', () => (
    <Activities>
      <Container>
        <div>
          <ImageListItem
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
          <ImageListItem
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
          <ImageListItem
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
          <ImageListItem
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
        </div>
      </Container>
    </Activities>
  ));
