import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Banner from '../components/Banner';
import Button from '../components/Button';

storiesOf('Banner', module)
  .add('basic', () => (
    <Banner>
      <h1>Banner</h1>
    </Banner>
  ))
  .add('primary background', () => (
    <Banner primary>
      <h1>Banner</h1>
    </Banner>
  ))
  .add('dark background', () => (
    <Banner dark>
      <h1>Banner</h1>
    </Banner>
  ))
  .add('with more content', () => (
    <Banner primary>
      <h1>Banner</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et
        blanditiis minus esse! Doloremque blanditiis consectetur aut deserunt
        officiis quas consequuntur alias distinctio laboriosam, velit tempore
        repudiandae aspernatur delectus ducimus.
      </p>
      <Button>CTA</Button>
    </Banner>
  ));
