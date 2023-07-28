import {Promo} from '../../blocks/promo/Promo';
import {Custom} from '../../blocks/custom/Custom';
import {StyledMain} from './style';
import {News} from '../../blocks/news/News';

export function Main() {
  return (
    <StyledMain>
      <Promo></Promo>
      <Custom></Custom>
      <News></News>
    </StyledMain>
  );
}
