import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { configure, addDecorator } from '@storybook/react';

import Hero from '../components/Hero.js';

storiesOf('Shared | Hero', module).add('Full', () => (
  <div
    style={{
      display: 'grid',
      gridGap: '1rem'
    }}
  >
    <Hero onClick={action('clicked')} />
  </div>
));
