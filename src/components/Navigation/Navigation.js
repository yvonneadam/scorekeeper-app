import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Play</StyledLink>
      <StyledLink to="/history">History</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  flex: 1;
  background: #fb9350;
  text-decoration: none;
  border-radius: 10px;
  color: black;
  padding: 15px;
  display: grid;
  place-items: center;
  border: 1px dotted;
  &.active {
    background-color: #dae349;
    color: black;
  }
`;
