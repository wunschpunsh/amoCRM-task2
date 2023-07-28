import {styled} from 'styled-components';

const StyledInterfaceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media ${({theme}) => theme.device.mobile} {
    margin-top: 20px;
  }
`;
const StyledInterfaceBasket = styled.div`
  margin-right: 40px;
`;

export {StyledInterfaceWrapper, StyledInterfaceBasket};
