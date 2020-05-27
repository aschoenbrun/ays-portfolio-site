import React from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import HeaderBarVideoBG from "./HeaderBarVideoBG";
import HeaderPortrait from "./HeaderPortrait";
import HeaderNamePos from "./HeaderNamePos";

const HeaderBarTopStyles = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  background-color: ${color("blue")};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  @media screen and (min-width: 420px) {
    justify-content: center;
  }
`;

const HeaderBarTop = () => {
  return (
    <HeaderBarTopStyles>
      <HeaderBarVideoBG opacity="0.5" blendMode="color-burn" />
      <HeaderPortrait />
      <HeaderNamePos />
    </HeaderBarTopStyles>
  );
};

export default HeaderBarTop;
