import React from "react";
import styled from "styled-components/macro";
import { color, HeaderFooterText } from "../GlobalStyles";

const FooterBarBottomBgImg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url("https://res.cloudinary.com/aschoen/image/upload/c_fill,f_auto,g_center,h_60,q_auto,w_1920/v1591042503/AYS%20Portfolio%20Site%20Images/wall-1846946_1920---I_ukff5z.jpg");
  mix-blend-mode: luminosity;
  opacity: 0.075;
`;

const FooterBottomStyles = styled.div`
  position: relative;
  background-color: ${color("blue")};
  padding: 20px;
  p {
    margin: 0;
    position: relative;
    z-index: 1;
  }
`;

const FooterBarBottom = () => {
  return (
    <FooterBottomStyles>
      <HeaderFooterText as="p">
        &copy; Copyright {new Date().getFullYear()} Avi Schoenbrun
      </HeaderFooterText>
      <FooterBarBottomBgImg />
    </FooterBottomStyles>
  );
};

export default FooterBarBottom;
