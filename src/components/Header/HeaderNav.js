import React, { useContext } from "react";
import styled from "styled-components/macro";
import HeaderNavItem from "./HeaderNavItem";
import HeaderNavToggle from "./HeaderNavToggle";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { NavContext } from "../Layouts/LayoutMain";

const navItems = (navItemArr) =>
  navItemArr.map((navItem) => {
    return <HeaderNavItem key={navItem.name} navItem={navItem} />;
  });

// TODO: Check nav cross-browser compatability

const HeaderNavStyles = styled.nav`
  width: 200px;
  margin: 0 auto;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    padding: 0;
    width: 200px;
    transition: 0.5s;
    margin: 0 1px;
    list-style-type: none;
    @media screen and (min-width: 960px) {
      flex-direction: row;
      box-shadow: none;
      position: relative;
      width: 100%;
    }
  }
`;

const HeaderNav = () => {
  const { navOpen, navItemArr, visible } = useContext(NavContext);
  const max960 = useMediaQuery({ maxWidth: 960 });

  const menuVariants = {
    closed: {
      y: "calc(-1 * 100% + 38px)",
    },
    open: {
      y: 0,
    },
  };

  return (
    <HeaderNavStyles>
      <motion.ul
        variants={menuVariants}
        initial={max960 ? "closed" : "open"}
        animate={max960 && navOpen ? "open" : max960 ? "closed" : "open"}
        transition={{ type: "spring" }}
      >
        {navItems(navItemArr)}
        {(max960 || visible) && <HeaderNavToggle />}
      </motion.ul>
    </HeaderNavStyles>
  );
};
export default HeaderNav;
