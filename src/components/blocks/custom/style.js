import styled from 'styled-components';

const StyledCustom = styled.section`
  background-color: ${({theme}) => theme.colors.grey};
`;

const StyledCustomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledCustomImgWrapper = styled.div`
  width: 50%;
  max-width: 596px;

  @media ${({theme}) => theme.device.mobile} {
    display: none;
  }
`;
const StyledCustomImg = styled.img`
  width: 100%;
`;
const StyledCustomContent = styled.div`
  width: 50%;
  max-width: 596px;

  padding: 80px 0;

  @media ${({theme}) => theme.device.mobile} {
    width: 100%;
    max-width: 100%;
  }
`;

export {
  StyledCustom,
  StyledCustomWrapper,
  StyledCustomImgWrapper,
  StyledCustomImg,
  StyledCustomContent,
};
