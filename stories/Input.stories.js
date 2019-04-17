import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { addDecorator } from '@storybook/react';

import Container from '../components/Container';
import Input from '../components/Input.js';
import Button from '../components/Button';

storiesOf('Shared | Input', module)
  .addDecorator(storyFn => (
    <Container style={{ paddingTop: '2rem' }}>{storyFn()}</Container>
  ))
  .add('input', () => <Input />)
  .add('input with label', () => <Input label="First Name" />)
  .add('input with description', () => (
    <Input label="Person Number" description="(YYYY-MM-DD-000)" />
  ))
  .add('textarea', () => <Input textarea label="Message" />)
  .add('Example "Contact Us"', () => (
    <div>
      <Input label="Name" />
      <Input label="Email" type="email" />
      <Input label="Subject" />
      <Input textarea label="Message" />
      <Button primary>Send</Button>
    </div>
  ));
