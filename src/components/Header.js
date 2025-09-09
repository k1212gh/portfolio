// src/components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  background-color: #222;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavList = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #61dafb;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #61dafb;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <Navbar>
      <NavList>
        <StyledLink to="/" className={location.pathname === "/" ? "active" : ""}>
          홈
        </StyledLink>
        <StyledLink to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
          프로젝트
        </StyledLink>
        <StyledLink to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          연락처
        </StyledLink>
      </NavList>
    </Navbar>
  );
};

export default Header;

