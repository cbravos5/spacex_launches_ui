import { NavLink, NavLinkProps } from "react-router-dom";
import { keyframes, styled } from "../../../stitches/stitches.config"

const fadeIn = keyframes({
  to: { opacity: 1 },
});

const StyledNavLink = styled(NavLink, {
  fontSize: '32px',
  color: '$light',

  cursor: 'pointer',

  transition: '0.1s ease',

  opacity: 0,

  '&:hover': { color: '$darkBlue' },

  '&:active': { color: '#207fc3' }
});

type NavProps = { delay: number; } & NavLinkProps;

const Nav = ({ delay, ...props }: NavProps) => (
  <StyledNavLink
    {...props}
    css={{
      animation: `${fadeIn} 0.3s ${2.9 + 0.3 * delay}s forwards`,
    }}
  />
);

export default Nav;