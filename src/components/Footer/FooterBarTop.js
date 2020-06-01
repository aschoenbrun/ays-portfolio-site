import React from "react";
import FooterBuiltWith from "./FooterBuiltWith";
import RepoLink from "../RepoLink";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";

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
`;

const FooterBarTopBgImg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  background-image: url("https://res.cloudinary.com/aschoen/image/upload/c_fill,f_auto,g_center,h_250,q_auto,w_1920/v1591042503/AYS%20Portfolio%20Site%20Images/wall-1846946_1920---I_ukff5z.jpg");
  mix-blend-mode: multiply;
  opacity: 0.2;
`;

const FooterBarTop = () => {
  return (
    <FooterBarTopStyles>
      <FooterBuiltWith />
      <RepoLink
        appBuilt={"website"}
        repoUrl="https://github.com/aschoenbrun/ays-portfolio-site"
      />
      <FooterBarTopBgImg />
    </FooterBarTopStyles>
  );
};

export default FooterBarTop;
