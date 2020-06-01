import React from "react";
import styled from "styled-components/macro";
import { color, HeaderFooterText } from "../GlobalStyles";

const FooterBottomStyles = styled.div`
  background-color: ${color("blue")};
  padding: 20px;
  p {
    margin: 0;
  }
`;

const FooterBarBottom = () => {
  return (
    <FooterBottomStyles>
      <HeaderFooterText as="p">
        &copy; Copyright {new Date().getFullYear()} Avi Schoenbrun
      </HeaderFooterText>
    </FooterBottomStyles>
  );
};

export default FooterBarBottom;
