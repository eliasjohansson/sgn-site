import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Activity from '../components/Branches/Activity';

storiesOf('Page Specific|Branches/Activity', module).add('basic', () => <Activity image="https://via.placeholder.com/160" title="Welcome Gatherings" description="We meet new arrivals and provide information about Swedish society, culture and lifestyle." />);
