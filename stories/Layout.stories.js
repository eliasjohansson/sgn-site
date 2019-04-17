import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Container from '../components/Container';

storiesOf('Shared | Layout', module)
  .add('default', () => (
    <Layout>
      <Container>
        <p>Content</p>
      </Container>
    </Layout>
  ))
  .add(
    'mobile',
    () => (
      <Layout>
        <Container>
          <p>Content</p>
        </Container>
      </Layout>
    ),
    {
      viewport: { defaultViewport: 'iphonex' }
    }
  );
