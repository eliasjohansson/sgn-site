import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import EventCard from '../components/EventCard.js';

storiesOf('EventCard', module)
  .add('with cta', () => <EventCard onClick={action('clicked')} />)
  .add('with link', () => <EventCard onClick={action('clicked')} />);
