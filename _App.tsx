//Libs
import React from 'react';
import AppLoading from 'expo-app-loading';

//Pages
import { Welcome } from './src/pages/Welcome';

//Standard colors 
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

//Standart Fonts
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
}from '@expo-google-fonts/poppins';

export function App(){
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
        <ThemeProvider theme={theme} >
          <Welcome />
        </ThemeProvider>
  )
}