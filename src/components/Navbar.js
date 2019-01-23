import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavWrapper = styled.nav`
  text-align: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavLink = styled.li`
  font-weight: bold;
`;

const Navbar = class extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavList>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/top-list">Top 5 Arnold Schartsenegger leffat</Link>
          </NavLink>
          <NavLink>
            <Link to="/top-list">Hyviä linkkejä</Link>
          </NavLink>
        </NavList>
      </NavWrapper>
    );
  }
};

export default Navbar;
