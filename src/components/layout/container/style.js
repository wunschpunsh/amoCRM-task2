import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({theme}) => theme.maxPageWidth};

  padding: ${({theme}) => theme.pagePadding};
  margin: 0 auto;

  @media ${({theme}) => theme.device.mobile} {
    padding: 0 20px;
  }
`;

export {StyledContainer};
