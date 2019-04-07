import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import  EventCard  from '../Components/EventCard.js';


storiesOf('EventCard', module)
  .add('with text', () => <EventCard onClick={action('clicked')}>Hello EventCard</EventCard>)
