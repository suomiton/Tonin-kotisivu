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

// API Oauth dc37f0c92b4d1610cf33827e6a16fb140b2c721da9296f8f6f3ccb7bef3aee2f
