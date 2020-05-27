import React from "react";
import styled from "styled-components/macro";
import HeaderNavItem from "./HeaderNavItem";

const navItemArr = [
  {
    name: "About",
    uri: "about",
  },
  {
    name: "Apps",
    uri: "apps",
  },
  {
    name: "Contact",
    uri: "gallery",
  },
  {
    name: "Resume",
    uri: "resume",
  },
];

const navItems = navItemArr.map((navItem) => {
  console.log(navItem.name);
  return <HeaderNavItem key={navItem.name} navItem={navItem} />;
});

const HeaderNavStyles = styled.nav`
  ul {
    position: absolute;
    bottom: -38px;
    transform: translateY(0);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    padding: 0;
    width: 200px;
    transition: 0.5s;
    @media screen and (min-width: 960px) {
      flex-direction: row;
      box-shadow: none;
      position: relative;
      width: 100%;
      bottom: auto;
    }
  }
`;

const HeaderNav = () => {
  return (
    <HeaderNavStyles>
      <ul>{navItems}</ul>
    </HeaderNavStyles>
  );
};
export default HeaderNav;
