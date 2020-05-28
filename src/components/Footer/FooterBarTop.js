import React from "react";
import FooterBuiltWith from "./FooterBuiltWith";
import styled from "styled-components/macro";
import { color, HeaderFooterText } from "../GlobalStyles";

const FooterBarTopStyles = styled.div`
  background-color: ${color("tan", "dk")};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  z-index: 1000;
  padding: 20px 20px 25px;
  .btn {
    margin-top: -20px;
    @media screen and (min-width: 760px) {
      margin-top: 0px;
    }
  }
  h3 {
    display: block;
    width: 100%;
    font-size: 17px;
    margin: 0;
    padding-right: 0;
    color: ${color("tan", "dk")};
  }
`;

const FooterBarTop = () => {
  return (
    <FooterBarTopStyles>
      <FooterBuiltWith />
      <HeaderFooterText as="h3">Built with</HeaderFooterText>
      {/* REPO LINK */}
      {/* FOOTER BOTTOM > COPY */}
    </FooterBarTopStyles>
  );
};

export default FooterBarTop;
