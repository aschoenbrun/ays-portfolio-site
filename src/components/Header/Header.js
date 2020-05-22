import React from "react";
import styled from "styled-components/macro";
import HeaderBartop from "./HeaderBarTop";
import HeaderBarBottom from "./HeaderBarBottom";
import HeaderNav from "./HeaderNav";

const HeaderStyles = styled.header`
  color: white;
  padding: 0;
  position: relative;
  z-index: 3000;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderBartop />
      <HeaderBarBottom />
      <HeaderNav />
    </HeaderStyles>
  );
};

export default Header;
