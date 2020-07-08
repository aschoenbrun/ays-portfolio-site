import React, { useContext } from "react";
import { PageContext } from "../Layouts/LayoutMain";
import styled from "styled-components/macro";
import FooterBarTop from "./FooterBarTop";
import FooterBarBottom from "./FooterBarBottom";

const FooterStyles = styled.footer`
  margin-top: ${(props) => (props.pageType === "homePage" ? 0 : "75px")};
  text-align: center;
`;

const Footer = () => {
  const pageContext = useContext(PageContext);
  const { pageData } = pageContext;
  return (
    <FooterStyles pageType={pageData._type}>
      <FooterBarTop />
      <FooterBarBottom />
    </FooterStyles>
  );
};

export default Footer;
