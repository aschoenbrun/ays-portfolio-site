import React from "react";
import styled from "styled-components/macro";
import Headroom from "react-headroom";
import HeaderBartop from "./HeaderBarTop";
import HeaderBarBottom from "./HeaderBarBottom";
import HeaderNav from "./HeaderNav";

const HeaderStyles = styled.header`
  color: white;
  padding: 0;
  position: relative;
  z-index: 3000;
  .headroom-wrapper {
    margin-bottom: 80px;
    @media screen and (min-width: 960px) {
      margin-bottom: 50px;
    }
    .headroom--unpinned,
    .headroom--scrolled {
      @media screen and (max-width: 960px) {
        position: static !important;
      }
    }
    .headroom--scrolled {
      @media screen and (min-width: 760px) {
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Headroom pinStart={500}>
        <HeaderBartop />
        <HeaderBarBottom />
        <HeaderNav />
      </Headroom>
    </HeaderStyles>
  );
};

export default Header;
