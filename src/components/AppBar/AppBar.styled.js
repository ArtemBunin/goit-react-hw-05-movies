import { NavLink } from "react-router-dom";
import styled from "styled-components";

export  const NavItem=styled(NavLink)`
margin-right: 20px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
    text-decoration: underline;
  }
`

export const NAV= styled.nav`
  box-shadow: 10px 5px 5px gray;
          margin: 15px 5px 15px 15px;
          padding: 15px;
`