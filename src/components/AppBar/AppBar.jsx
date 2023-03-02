import { NavItem, NAV } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'HOME' },
  { href: 'movies', text: 'Movies' },
];

export const AppBAr = () => {
  return (
    <header>
      <NAV>
        {navItems.map(({ href, text }) => (
          <NavItem key={href} to={href}>
            {text}
          </NavItem>
        ))}
      </NAV>
    </header>
  );
};
