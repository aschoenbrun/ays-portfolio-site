import React from "react";
import styled from "styled-components/macro";
import FooterBarTop from "./FooterBarTop";
import FooterBarBottom from "./FooterBarBottom";

const FooterStyles = styled.footer`
  margin-top: 75px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <FooterBarTop />
      <FooterBarBottom />
    </FooterStyles>
  );
};

export default Footer;
