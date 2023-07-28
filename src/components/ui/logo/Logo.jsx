import {StyledLogoWrapper, StyledLogo} from './style';

import logo from '../../../images/logo.png';

export function Logo() {
  return (
    <StyledLogoWrapper>
      <StyledLogo src={logo} alt='Логотип' width={170} height={48} />
    </StyledLogoWrapper>
  );
}
