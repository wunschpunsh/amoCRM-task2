import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-shrink: 0;

  padding: 130px 0 194px;

  @media ${({theme}) => theme.device.mobile} {
    padding: 50px 0 10px;
  }
`;
const StyledFooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${({theme}) => theme.device.mobile} {
    flex-direction: column;
  }
`;

const StyledFooterInfo = styled.div`
  max-width: 290px;

  @media ${({theme}) => theme.device.mobile} {
    margin-bottom: 20px;
  }
`;
const StyledFooterText = styled.p`
  font-size: 15px;
  line-height: 25px;

  margin: 0;
  margin-top: 35px;

  color: ${({theme}) => theme.colors.secondaryTextColor};
`;

const StyledFooterMenu = styled.div`
  margin-left: 150px;

  @media ${({theme}) => theme.device.mobile} {
    margin-left: 0;
    margin-bottom: 20px;
  }

  & ul {
    display: flex;
    flex-direction: column;
  }

  & li:not(:last-child) {
    margin-bottom: 10px;
  }

  & a {
    color: ${({theme}) => theme.colors.secondaryTextColor};
  }
`;
const StyledFooterTitleMenu = styled.p`
  margin: 0;
  margin-bottom: 23px;

  color: ${({theme}) => theme.colors.mainTextColor};
`;

export {
  StyledFooter,
  StyledFooterWrapper,
  StyledFooterInfo,
  StyledFooterText,
  StyledFooterMenu,
  StyledFooterTitleMenu,
};
