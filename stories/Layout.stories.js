import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Layout from '../components/Layout';

storiesOf('Layout', module)
  .add('default', () => (
    <Layout>
      <p
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        Content
      </p>
    </Layout>
  ))
  .add(
    'mobile',
    () => (
      <Layout>
        <p
          style={{
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          Content
        </p>
      </Layout>
    ),
    {
      viewport: { defaultViewport: 'iphonex' }
    }
  );
