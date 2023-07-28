import {StyledHotWrapper, StyledHotText} from './style';

import {ReactComponent as FireIcon} from '../../../images/svg/fire.svg';

export function HotTitle() {
  return (
    <StyledHotWrapper>
      <FireIcon aria-label='жаркая новость' width={32} height={32}></FireIcon>
      <StyledHotText>FUTURE OF eSPORTS</StyledHotText>
    </StyledHotWrapper>
  );
}
