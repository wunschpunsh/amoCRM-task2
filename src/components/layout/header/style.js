import styled from 'styled-components';

const StyledHeader = styled.header`
  flex-shrink: 0;

  padding: 20px 0;

  background: linear-gradient(
    to right,
    ${({theme}) => theme.colors.secondaryBgColor} 55%,
    ${({theme}) => theme.colors.blue} 45%
  );

  @media ${({theme}) => theme.device.mobile} {
    background: ${({theme}) => theme.colors.secondaryBgColor};

    nav {
      order: 3;
      flex-grow: 1;
    }

    ul {
      justify-content: center;
      flex-wrap: wrap;

      margin-top: 20px;
    }
  }
`;
const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media ${({theme}) => theme.device.mobile} {
    flex-direction: column;
  }
`;

export {StyledHeader, StyledHeaderWrapper};
