import {StyledNav, StyledNavList, StyledNavItem, StyledNavLink} from './style';

export function Nav({links}) {
  return (
    <StyledNav>
      <StyledNavList>
        {links.map((link) => (
          <StyledNavItem key={link.text}>
            <StyledNavLink to={link.href}>{link.text}</StyledNavLink>
          </StyledNavItem>
        ))}
      </StyledNavList>
    </StyledNav>
  );
}
