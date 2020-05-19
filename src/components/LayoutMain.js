import React from "react";
import Header from "./Header/Header";
import GlobalStyles from "./GlobalStyles";

const LayoutMain = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div id="sticky-footer__body">
        <Header />
        <main>{children}</main>
      </div>
      <footer id="site-footer">Footer</footer>
    </>
  );
};

export default LayoutMain;
