import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { RouterHome } from './router';
import GlobalStyles from './styles/global';
import { DataMeetContextProvider } from './hook/useDataMeet';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DataMeetContextProvider>
          <GlobalStyles />
          <RouterHome />
        </DataMeetContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
