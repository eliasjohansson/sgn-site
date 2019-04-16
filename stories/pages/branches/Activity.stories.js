import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Activity from '../../../components/Branches/Activity';
import { Activities } from '../../../components/Branches/SelectedBranch';
import Container from '../../../components/Container';

storiesOf('Page Specific|Branches/Activity', module)
  .add('single', () => (
    <Activity
      image="https://via.placeholder.com/160"
      title="Welcome Gatherings"
      description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
    />
  ))
  .add('list', () => (
    <Activities>
      <Container>
        <h1>Activities</h1>
        <div>
          <Activity
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
          <Activity
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
          <Activity
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
          <Activity
            image="https://via.placeholder.com/160"
            title="Welcome Gatherings"
            description="We meet new arrivals and provide information about Swedish society, culture and lifestyle."
          />
        </div>
      </Container>
    </Activities>
  ));
