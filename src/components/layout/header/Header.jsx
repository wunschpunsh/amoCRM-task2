import {Logo} from '../../ui/logo/Logo';
import {Nav} from '../../ui/nav/Nav';
import {Interface} from '../../ui/interface/Interface';
import {Container} from '../container/Container';
import {StyledHeader, StyledHeaderWrapper} from './style';

const menuLinks = [
  {
    href: '/index',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/team',
    text: 'Team',
  },
  {
    href: '/shop',
    text: 'Shop',
  },
  {
    href: '/pages',
    text: 'Pages',
  },
];

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <Logo />
          <Nav links={menuLinks} />
          <Interface />
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  );
}
