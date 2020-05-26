import React from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
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
  &::after {
    content: "";
    background-image: url("https://media.giphy.com/media/mG2pQXAWNl4Vt77Kef/giphy.gif");
    mix-blend-mode: difference;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const HeaderBarTop = () => {
  return (
    <HeaderBarTopStyles>
      <HeaderPortrait />
      <HeaderNamePos />
    </HeaderBarTopStyles>
  );
};

export default HeaderBarTop;
