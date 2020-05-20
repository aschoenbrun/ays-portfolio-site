import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";

const PageIntroStyle = styled.div`
  font-size: 18px;
  line-height: 1.8em;
  letter-spacing: 0.07em;
  margin-top: 0;
`;

const PageIntroSlashStyle = styled.div`
  float: left;
  margin-top: 2px;
  margin-right: 10px;
  letter-spacing: 0.01em;
  color: ${color("tan", "lt")};
  font-weight: 300;
`;

const PageIntro = ({ children }) => {
  return (
    <PageIntroStyle>
      <PageIntroSlashStyle>&#47;&#47;&nbsp;</PageIntroSlashStyle>
      <ReactMarkdown source={children} />
    </PageIntroStyle>
  );
};

export default PageIntro;
