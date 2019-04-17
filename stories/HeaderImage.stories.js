import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { configure, addDecorator } from '@storybook/react';

import HeaderImage from '../components/HeaderImage.js';

storiesOf('Shared | HeaderImage', module).add('Full', () => (
  <div
    style={{
      display: 'grid',
      gridGap: '1rem'
    }}
  >
    <HeaderImage onClick={action('clicked')} />
  </div>
));
