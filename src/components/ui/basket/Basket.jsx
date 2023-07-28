import {StyledBasket, StyledBasketIcon, StyledBasketCount} from './style';

import basket from '../../../images/svg/basket.svg';

export function Basket() {
  return (
    <StyledBasket href='#'>
      <StyledBasketIcon
        src={basket}
        alt='корзина с заказом'
        width={32}
        height={32}
      ></StyledBasketIcon>
      <StyledBasketCount>0</StyledBasketCount>
    </StyledBasket>
  );
}
