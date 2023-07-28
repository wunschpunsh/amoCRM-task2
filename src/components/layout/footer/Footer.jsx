import {Container} from '../container/Container';
import {Logo} from '../../ui/logo/Logo';
import {Nav} from '../../ui/nav/Nav';

import {
  StyledFooter,
  StyledFooterWrapper,
  StyledFooterInfo,
  StyledFooterText,
  StyledFooterMenu,
  StyledFooterTitleMenu,
} from './style';

const footerLinks = [
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/blog',
    text: 'Blog',
  },
  {
    href: '/shop',
    text: 'Shop',
  },
  {
    href: '/contact',
    text: 'Contact us',
  },
];

const otherFooterLinks = [
  {
    href: '/styleguide',
    text: 'Styleguide',
  },
  {
    href: '/changelog',
    text: 'Changelog',
  },
  {
    href: '/licenses',
    text: 'Licenses',
  },
  {
    href: '/team',
    text: 'Team',
  },
];

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterWrapper>
          <StyledFooterInfo>
            <Logo></Logo>
            <StyledFooterText>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non .
            </StyledFooterText>
          </StyledFooterInfo>
          <StyledFooterMenu>
            <StyledFooterTitleMenu>Menu Items</StyledFooterTitleMenu>
            <Nav links={footerLinks}></Nav>
          </StyledFooterMenu>
          <StyledFooterMenu>
            <StyledFooterTitleMenu>Other Pages</StyledFooterTitleMenu>
            <Nav links={otherFooterLinks}></Nav>
          </StyledFooterMenu>
        </StyledFooterWrapper>
      </Container>
    </StyledFooter>
  );
}
