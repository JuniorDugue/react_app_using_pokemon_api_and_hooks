import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation(props) {
  return (
    <div>
      <nav>
        <StyledNav>
          <NavLink to="/ground">Ground</NavLink>
          <NavLink to="/fire">Fire</NavLink>
          <NavLink to="/water">Water</NavLink>
          <NavLink to="/electric">Electric</NavLink>
          <NavLink to="/ghost">Ghost</NavLink>
        </StyledNav>
      </nav>
    </div>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    padding: 10px;
    margin: 10px 0;
  }
`;

export default Navigation;
