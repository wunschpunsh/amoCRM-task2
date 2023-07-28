import styled from 'styled-components';
import {P} from '../../reset-elements/p';

const StyledPromo = styled.section`
  margin-top: -1px;
  padding: 200px 0 250px;

  background: linear-gradient(
    to right,
    ${({theme}) => theme.colors.secondaryBgColor} 55%,
    ${({theme}) => theme.colors.blue} 45%
  );

  @media ${({theme}) => theme.device.mobile} {
    padding: 100px 0;
    background: ${({theme}) => theme.colors.secondaryBgColor};
  }
`;

const StyledPromoWrapper = styled.div`
  display: flex;
`;
const StyledPromoContent = styled.div`
  max-width: 50%;

  @media ${({theme}) => theme.device.mobile} {
    max-width: 100%;
  }
`;
const StyledPromoImgWrapper = styled.div`
  @media ${({theme}) => theme.device.mobile} {
    display: none;
  }
`;
const StyledPromoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
const StyledPromoDescription = styled(P)`
  font-size: 18px;
  line-height: 28px;

  margin-bottom: 53px;

  color: ${({theme}) => theme.colors.secondaryTextColor};
`;

const StyledPromoInterface = styled.div`
  display: flex;
  align-items: center;
`;

export {
  StyledPromo,
  StyledPromoWrapper,
  StyledPromoContent,
  StyledPromoImgWrapper,
  StyledPromoImg,
  StyledPromoDescription,
  StyledPromoInterface,
};
