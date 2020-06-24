import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";
import Button from "../components/Button/Button";

const PageIntroStyle = styled.div`
  display: flex;
  justify-content: ${(props) => (props.centerIntro ? "center" : "flex-start")};
  align-items: flex-start;
  margin-top: 0;
  margin-bottom: 75px;
  p {
    font-family: "Fira Sans", sans-serif;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.8em;
    letter-spacing: 0.07em;
  }
  strong {
    font-weight: 500;
  }
  .btn {
    margin-top: 20px;
  }
`;

const PageIntroSlashStyle = styled.div`
  margin-top: 5px;
  margin-right: 10px;
  line-height: 1em;
  letter-spacing: 0.01em;
  color: ${color("tan", "lt")};
  font-weight: 300;
`;

const PageIntroTextStyle = styled.div`
  /* margin-bottom: 20px; */
  p {
    margin: 0;
  }
`;

const PageIntro = ({ children, centerIntro, btnText, btnLink }) => {
  return (
    <PageIntroStyle centerIntro={centerIntro}>
      <PageIntroSlashStyle>&#47;&#47;&nbsp;</PageIntroSlashStyle>
      <div id="text-button-wrapper">
        <PageIntroTextStyle>
          <ReactMarkdown source={children} />
        </PageIntroTextStyle>
        {btnText && <Button text={btnText} url={btnLink} />}
      </div>
    </PageIntroStyle>
  );
};

export default PageIntro;
