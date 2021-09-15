import React from 'react';
import { Welcome } from './src/pages/Welcome';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Welcome />
    </ThemeProvider>
    );
}

export default App;