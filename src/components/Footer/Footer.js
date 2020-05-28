import React from "react";
import styled from "styled-components/macro";
import { color, HeaderFooterText } from "../GlobalStyles";
import FooterBarTop from "./FooterBarTop";

const FooterStyles = styled.footer`
  margin-top: 75px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <FooterBarTop />
    </FooterStyles>
  );
};

export default Footer;
