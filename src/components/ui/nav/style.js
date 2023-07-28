import {styled} from 'styled-components';
import {NavLink} from 'react-router-dom';
import {UL} from '../../reset-elements/ul';

const StyledNav = styled.nav``;
const StyledNavList = styled(UL)`
  display: flex;
  flex-wrap: wrap;
`;
const StyledNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 60px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  line-height: 26px;

  display: block;

  cursor: pointer;
  text-decoration: none;

  transition: opacity ${({theme}) => theme.mainTransition};

  color: ${({theme}) => theme.colors.mainTextColor};

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &.active {
    opacity: 1;
    color: ${({theme}) => theme.colors.currentLinkColor};
  }
`;
export {StyledNav, StyledNavList, StyledNavItem, StyledNavLink};
