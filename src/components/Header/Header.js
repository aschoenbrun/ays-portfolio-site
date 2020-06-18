import React, { useRef, useEffect } from "react";
import styled from "styled-components/macro";
import HeaderBartop from "./HeaderBarTop";
import HeaderBarBottom from "./HeaderBarBottom";
import HeaderNav from "./HeaderNav";

const HeaderStyles = styled.header`
  color: white;
  padding: 0;
  position: relative;
  z-index: 3000;
  margin-bottom: 80px;
  @media screen and (min-width: 960px) {
    margin-bottom: 50px;
  }
`;

const Header = ({ headerType }) => {
  const headerRef = useRef("");

  useEffect(() => {
    if (headerType === "sm") {
      headerRef.current.classList.add("sm");
      headerRef.current.classList.remove("lg");
    } else {
      headerRef.current.classList.add("lg");
      headerRef.current.classList.remove("sm");
    }
  }, [headerType]);

  console.log(headerType);

  return (
    <HeaderStyles ref={headerRef} className="lg">
      <HeaderBartop />
      <HeaderBarBottom />
      <HeaderNav />
    </HeaderStyles>
  );
};

export default Header;
