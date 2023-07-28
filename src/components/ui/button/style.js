import styled, {css} from 'styled-components';

const StyledBtn = styled.a`
  display: inline-flex;

  padding: 21px 34px;

  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;

  transition: color ${({theme}) => theme.mainTransition},
    border ${({theme}) => theme.mainTransition};

  border: ${(props) => (props.border ? '1px solid #fffff' : 'none')};
  color: ${({theme}) => theme.colors.mainTextColor};
  background-color: ${({theme}) => theme.colors.blue};

  @media ${({theme}) => theme.device.mobile} {
    padding: 10px;
  }

  &:hover,
  &:focus {
    color: ${({theme}) => theme.colors.currentLinkColor};
  }

  ${(props) =>
    props.$secondary &&
    css`
      padding: 16px 31px;

      background-color: transparent;

      @media ${({theme}) => theme.device.mobile} {
        padding: 10px;
      }
    `}

  ${(props) =>
    props.$border &&
    css`
      border: 1px solid ${({theme}) => theme.colors.mainTextColor};

      &:hover,
      &:focus {
        border: 1px solid ${({theme}) => theme.colors.currentLinkColor};
      }
    `}
`;

export {StyledBtn};
