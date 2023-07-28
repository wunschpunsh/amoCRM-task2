import styled from 'styled-components';

const StyledBasket = styled.a`
  position: relative;

  display: inline-flex;
  width: 32px;
  height: 32px;

  transition: opacity ${({theme}) => theme.mainTransition};

  &:hover {
    opacity: 0.5;
  }
`;
const StyledBasketIcon = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const StyledBasketCount = styled.span`
  font-size: 11px;
  line-height: 18px;

  position: absolute;
  top: -10px;
  right: -20px;

  width: 21px;
  height: 18px;

  content: '';
  text-align: center;

  border-radius: 9px;
  background-color: #ffffff;
  color: #141820;
`;

export {StyledBasket, StyledBasketIcon, StyledBasketCount};
