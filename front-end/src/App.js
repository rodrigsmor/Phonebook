import Routes from './routes';
import dark from './themes/dark';
import light from './themes/light';
import GlobalStyles from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
