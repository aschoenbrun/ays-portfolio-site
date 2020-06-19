import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import HeaderBartop from "./HeaderBarTop";
import HeaderBarBottom from "./HeaderBarBottom";
import HeaderNav from "./HeaderNav";
import { NavContext } from "../Layouts/LayoutMain";

const HeaderStyles = styled.header`
  color: white;
  padding: 0;
  position: relative;
  width: 100%;
  z-index: 3000;
  margin-bottom: 80px;
  @media screen and (min-width: 960px) {
    margin-bottom: 50px;
    &.scrolled {
      position: fixed;
      top: 0;
    }
  }
`;

const Header = () => {
  const { visible } = useContext(NavContext);
  const headerPosRef = useRef();
  useEffect(() => {
    visible
      ? headerPosRef.current.classList.add("scrolled")
      : headerPosRef.current.classList.remove("scrolled");
  }, [visible]);

  return (
    <HeaderStyles visible={visible} ref={headerPosRef}>
      <HeaderBartop />
      <HeaderBarBottom />
      <HeaderNav />
    </HeaderStyles>
  );
};

export default Header;
