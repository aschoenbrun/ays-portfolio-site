import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import HeaderBartop from "./HeaderBarTop";
import HeaderBarBottom from "./HeaderBarBottom";
import HeaderNav from "./HeaderNav";
import { NavContext } from "../Layouts/LayoutMain";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const HeaderStyles = styled(motion.header)`
  color: white;
  padding: 0;
  position: relative;
  width: 100%;
  z-index: 3000;
  position: fixed;
  top: 0;
`;

const Header = () => {
  const { visible, navOpen } = useContext(NavContext);
  const headerPosRef = useRef();
  const min960 = useMediaQuery({ minWidth: 960 });
  useEffect(() => {
    visible
      ? headerPosRef.current.classList.add("scrolled")
      : headerPosRef.current.classList.remove("scrolled");
  }, [visible]);

  const scrolledHeaderVariantsMobile = {
    closed: {
      top: -203,
      transition: { when: "afterChildren" },
    },
    open: {
      top: 0,
    },
  };

  const scrolledHeaderVariantsDesktop = {
    closed: {
      top: -125,
    },
    open: {
      top: 0,
    },
  };

  return (
    <HeaderStyles
      visible={visible}
      ref={headerPosRef}
      variants={
        min960 ? scrolledHeaderVariantsDesktop : scrolledHeaderVariantsMobile
      }
      animate={
        navOpen && visible ? "open" : !navOpen && visible ? "closed" : "open"
      }
      transition={{ type: "tween" }}
    >
      <HeaderBartop />
      <HeaderBarBottom />
      <HeaderNav />
    </HeaderStyles>
  );
};

export default Header;
