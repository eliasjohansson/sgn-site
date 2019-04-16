import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Event from '../../../components/Branches/Event';
import { Events } from '../../../components/Branches/SelectedBranch';
import Container from '../../../components/Container';

storiesOf('Page Specific|Branches/Event', module)
  .add('single', () => (
    <Container style={{ paddingTop: '2rem' }}>
      <Event
        image="https://via.placeholder.com/600x300"
        date="2019-08-25 11:00:00"
        title="Eid Al-Adha dag"
        link="https://www.facebook.com/events/330053544400045/"
      />
    </Container>
  ))
  .add('list', () => (
    <Events>
      <Container>
        <h1>Upcoming events</h1>
        <div>
          <Event
            image="https://via.placeholder.com/600x300"
            date="2019-08-25 11:00:00"
            title="Eid Al-Adha dag"
            link="https://www.facebook.com/events/330053544400045/"
          />
          <Event
            image="https://via.placeholder.com/600x300"
            date="2019-08-25 11:00:00"
            title="Eid Al-Adha dag"
            link="https://www.facebook.com/events/330053544400045/"
          />
        </div>
      </Container>
    </Events>
  ));
