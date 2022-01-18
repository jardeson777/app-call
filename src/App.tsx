import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterHome } from './router';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterHome />
      </ThemeProvider>
    </div>
  );
}

export default App;
