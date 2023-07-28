import styled from 'styled-components';
import underline from '../../../images/svg/line.svg';

const StyledUnderline = styled.span`
  position: relative;

  &::after {
    position: absolute;
    bottom: -7px;
    left: 0;

    width: 100%;
    height: 16px;

    content: '';

    background-image: url(${underline});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export {StyledUnderline};
