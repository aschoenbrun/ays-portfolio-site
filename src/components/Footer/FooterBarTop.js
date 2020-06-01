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

const FooterBarTop = () => {
  return (
    <FooterBarTopStyles>
      <FooterBuiltWith />
      <RepoLink
        appBuilt={"website"}
        repoUrl="https://github.com/aschoenbrun/ays-portfolio-site"
      />
    </FooterBarTopStyles>
  );
};

export default FooterBarTop;
