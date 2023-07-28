import styled, {css} from 'styled-components';

const StyledTitle = styled.h1`
  font-size: ${(props) => {
    let fontSize;

    switch (props.$size) {
      case 'h1':
        fontSize = '72px';
        break;
      case 'h2':
        fontSize = '64px';
        break;
      case 'h3':
        fontSize = '23px';
        break;
      default:
        fontSize = '72px';
    }
    return fontSize;
  }};
  font-weight: 400;
  line-height: ${(props) => {
    let lineHeight;

    switch (props.$size) {
      case 'h1':
        lineHeight = '86px';

        break;
      case 'h2':
        lineHeight = '74px';
        break;
      case 'h3':
        lineHeight = '34px';
        break;
      default:
        lineHeight = '86px';
    }
    return lineHeight;
  }};

  margin: 0;

  margin-bottom: ${(props) => {
    let marginBottom;
    switch (props.$size) {
      case 'h1':
        marginBottom = '45px';
        break;
      case 'h2':
        marginBottom = '38px';
        break;

      default:
        marginBottom = '45px';
    }
    return marginBottom;
  }};

  ${(props) =>
    props.$big &&
    css`
      font-size: 36px;
      line-height: 46px;
    `}

  text-transform: capitalize;

  color: ${({theme}) => theme.colors.mainTextColor};

  @media ${({theme}) => theme.device.mobile} {
    font-size: ${(props) => {
      let fontSize;

      switch (props.$size) {
        case 'h1':
          fontSize = '42px';
          break;
        case 'h2':
          fontSize = '36px';
          break;
        case 'h3':
          fontSize = '23px';
          break;
        default:
          fontSize = '48px';
      }
      return fontSize;
    }};

    line-height: 1;
  }
`;

export {StyledTitle};
