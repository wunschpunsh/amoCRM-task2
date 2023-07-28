import {StyledPageWrapper} from './style';
import {Header} from '../header/Header';
import {Main} from '../main/Main';
import {Footer} from '../footer/Footer';

export function PageWrapper() {
  return (
    <StyledPageWrapper>
      <Header />
      <Main />
      <Footer />
    </StyledPageWrapper>
  );
}
