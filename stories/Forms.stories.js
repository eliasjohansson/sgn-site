import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { addDecorator } from '@storybook/react';

import Container from '../components/Container';
import Input from '../components/Input.js';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

storiesOf('Shared | Forms', module)
  .addDecorator(storyFn => (
    <Container style={{ paddingTop: '2rem' }}>{storyFn()}</Container>
  ))
  .add('input', () => <Input />)
  .add('input with label', () => <Input label="First Name" />)
  .add('input with description', () => (
    <Input label="Person Number" description="(YYYY-MM-DD-000)" />
  ))
  .add('textarea', () => <Input textarea label="Message" />)
  .add('checkbox', () => (
    <Checkbox name="tac">
      I agree to the <a href="#">terms and conditions</a>
    </Checkbox>
  ));
