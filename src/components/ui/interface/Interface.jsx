import {Basket} from '../basket/Basket';
import {Button} from '../button/Button';

import {StyledInterfaceWrapper, StyledInterfaceBasket} from './style';

export function Interface() {
  return (
    <StyledInterfaceWrapper>
      <StyledInterfaceBasket>
        <Basket></Basket>
      </StyledInterfaceBasket>
      <Button $secondary $border link='#'>
        Contact Us
      </Button>
    </StyledInterfaceWrapper>
  );
}
