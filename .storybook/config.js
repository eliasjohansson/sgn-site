import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(storyFn => (
  <ThemeProvider theme={Theme}>
    <>
      <Normalize />
      <GlobalStyles />

      {storyFn()}
    </>
  </ThemeProvider>
));

configure(loadStories, module);
