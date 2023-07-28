import {PageWrapper} from '../layout/wrapper/PageWrapper';
import {GlobalStyles} from './style';
import {ThemeProvider} from 'styled-components';
import {baseTheme} from '../../theme/theme';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />

      <PageWrapper />
    </ThemeProvider>
  );
}

export default App;
