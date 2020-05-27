import React from "react";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import GlobalStyles, { color } from "../GlobalStyles";
import styled from "styled-components/macro";

export const PageContext = React.createContext();

const ContentStyles = styled.main`
  width: 95%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 960px;
  }
  @media screen and (min-width: 1350px) {
    width: 1150px;
  }
  /*position: relative;*/
  transition: opacity 0.5s;
  background-color: white;
  .header--fixed & {
    @media screen and (min-width: 960px) {
      margin-top: 250px;
    }
  }
  section {
    margin-bottom: 75px;
  }
  p,
  li {
    color: ${color("tan", "dk")};
  }
  p {
    text-align: left;
    line-height: 1.5em;
    letter-spacing: 0.1em;
  }
  .repo-link {
    margin: 60px 0 20px;
  }
`;

const LayoutMain = ({ children, location }) => {
  return (
    <PageContext.Provider value={location}>
      <GlobalStyles />
      <div id="sticky-footer__body">
        <Helmet>
          <title>Portfolio - Avi Schoenbrun</title>
        </Helmet>
        <Header />
        <ContentStyles>{children}</ContentStyles>
      </div>
      <footer id="site-footer">Footer</footer>
    </PageContext.Provider>
  );
};

export default LayoutMain;
