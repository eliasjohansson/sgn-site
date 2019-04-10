import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withA11y);
addDecorator(storyFn => (
  <ThemeProvider theme={Theme}>
    <>
      <Normalize />
      <GlobalStyles />

      {storyFn()}
    </>
  </ThemeProvider>
));

addParameters({ viewport: { viewports: { ...INITIAL_VIEWPORTS } } });

configure(loadStories, module);
