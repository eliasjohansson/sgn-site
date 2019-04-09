import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Navbar from '../components/Navbar';

storiesOf('Navbar', module)
  .add('default', () => <Navbar />)
  .add('mobile', () => <Navbar />, {
    viewport: { defaultViewport: 'iphonex' }
  })
  .add('mobile menu open', () => <Navbar open />, {
    viewport: { defaultViewport: 'iphonex' }
  });
