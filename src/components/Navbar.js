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
  margin-bottom: 15px;
`;

const Navbar = class extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavList>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/guestbook">Guestbook</Link>
          </NavLink>
          <NavLink>
            <Link to="/about/top-5-arnold-movies">
              Top 5 Arnold Schartsenegger leffat
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/about/links-to-cool-sites">Awesome links</Link>
          </NavLink>
        </NavList>
      </NavWrapper>
    );
  }
};

export default Navbar;
