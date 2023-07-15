import React from "react";
import { styled } from "styled-components";

const Nav = () => {
  const Nav = styled.nav`
    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  `;

  return <Nav>Nav</Nav>;
};

export default Nav;
