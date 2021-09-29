import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

//Global styles
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';

import Routes from './src/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
      </NavigationContainer>
      </ThemeProvider>
    );
}

export default App;