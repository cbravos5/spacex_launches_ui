import { NavLink, NavLinkProps } from "react-router-dom";
import { styled } from "../../../stitches/stitches.config"

const StyledNavLink = styled(NavLink, {
  fontSize: '32px',
  color: '$light',

  cursor: 'pointer',

  transition: '0.1s ease',

  '&:hover': { color: '$darkBlue' },

  '&:active': { color: '$light' }
});

const Nav = ({ ...props }: NavLinkProps) => <StyledNavLink {...props} />

export default Nav;