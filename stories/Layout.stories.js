import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

storiesOf('Layout', module)
  .add('Navbar', () => <Navbar />)
  .add('Footer', () => <Footer />)
  .add('default Layout', () => (
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
  ));
