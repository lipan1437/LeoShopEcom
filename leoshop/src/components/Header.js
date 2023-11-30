import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Nav from "./Nav";
import logo from "../images/LeoShop_logo.jpg"
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} className="logo" alt="my logo" />
      </NavLink>
      <Nav/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  border-right-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 7rem;
  }
`;

export default Header;
