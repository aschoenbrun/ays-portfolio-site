import React from "react";
import Header from "./Header/Header";
import { Helmet } from "react-helmet";
import GlobalStyles from "./GlobalStyles";

const LayoutMain = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div id="sticky-footer__body">
        <Helmet>
          <title>Portfolio - Avi Schoenbrun</title>
        </Helmet>
        <Header />
        <main>{children}</main>
      </div>
      <footer id="site-footer">Footer</footer>
    </>
  );
};

export default LayoutMain;
