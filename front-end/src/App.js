import React from 'react';
import Routes from './routes';
import dark from './themes/dark';
import light from './themes/light';
import GlobalStyles from './GlobalStyle';
import { useAuth } from './providers/auth';
import { ThemeProvider } from 'styled-components';

function App() {
  const { theme } = useAuth();

  const currentTheme = () => {
    if(theme === 'light')
      return light;
    else 
      return dark;
  }
  
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
