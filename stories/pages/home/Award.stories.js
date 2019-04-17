import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { StyledAwards, Award } from '../../../components/Home/Awards';
import Container from '../../../components/Container';

storiesOf('Page Specific|Home/Awards', module)
  .add('single', () => (
    <Container style={{ paddingTop: '2rem', width: '300px', height: 'auto' }}>
      <Award>
        <div>
          <img src="https://via.placeholder.com/300" alt="" />
        </div>
        <h4>
          We won the ttela award for best innovation or something. And we love
          it!!
        </h4>
      </Award>
    </Container>
  ))
  .add('list', () => (
    <StyledAwards>
      <h1>Awards we are proud of</h1>

      <div>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
        <Award>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <h4>
            We won the ttela award for best innovation or something. And we love
            it!!
          </h4>
        </Award>
      </div>
    </StyledAwards>
  ));
