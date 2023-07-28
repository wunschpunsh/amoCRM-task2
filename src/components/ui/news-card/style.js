import styled, {css} from 'styled-components';

const StyledNewsCard = styled.div`
  ${(props) => props.$big && css``}
  & h3 {
    margin: 0;
  }
`;
const StyledNewsCardImgWrapper = styled.div`
  overflow: hidden;

  margin-bottom: 30px;

  transition: box-shadow ${({theme}) => theme.mainTransition};

  border-radius: 40px;

  ${(props) =>
    props.$big &&
    css`
      margin-bottom: 54px;
    `}
`;
const StyledNewsCardImg = styled.img`
  width: 100%;
`;
const StyledNewsCardDate = styled.span`
  font-size: 18px;
  line-height: 18px;

  display: block;

  margin-bottom: 20px;

  color: ${({theme}) => theme.colors.blue};

  ${(props) =>
    props.$big &&
    css`
      margin-bottom: 28px;
    `}
`;

export {
  StyledNewsCard,
  StyledNewsCardImgWrapper,
  StyledNewsCardImg,
  StyledNewsCardDate,
};
