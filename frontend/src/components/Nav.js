import React from "react";
import logo from "../components/imgs/logo.png";

//styled Components
import styled from "styled-components";

//Navigation
import { Link } from "react-router-dom";

const Nav = () => {
  const menuOptions = {
    about: "<Home/>",
    portfolio: "<Portfolio/>",
    contact: "<Contact Me/>",
  };

  return (
    <StyledNav>
      <Link to="/">
        <img src={logo} />
      </Link>

      <ul>
        <li>
          <Link to="/">{menuOptions.about}</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>{menuOptions.portfolio}</Link>
        </li>
        <li>
          <Link to={"/contact"}>{menuOptions.contact}</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  top: 0;
  h1 {
    font-zise: 40px;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  img {
    width: 100px;
  }
`;
export default Nav;
