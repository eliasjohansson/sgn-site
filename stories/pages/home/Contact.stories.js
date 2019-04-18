import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ContactForm from '../../../components/Forms/ContactForm';
import Banner from '../../../components/Banner';
import { StyledContact, ContactBanner } from '../../../components/Home/Contact';

storiesOf('Page Specific|Home/Contact', module)
  .add('form', () => <ContactForm />)
  .add('banner', () => (
    <ContactBanner primary>
      <h1>Feel free to contact us regarding any subject.</h1>
    </ContactBanner>
  ))
  .add('complete section', () => (
    <StyledContact>
      <ContactForm />
      <ContactBanner primary>
        <h1>Feel free to contact us regarding any subject.</h1>
      </ContactBanner>
    </StyledContact>
  ));
