import React from "react";
import Header from "./Header/Header";
import { Helmet } from "react-helmet";
import GlobalStyles from "./GlobalStyles";

export const PageContext = React.createContext();

const LayoutMain = ({ children, location }) => {
  return (
    <PageContext.Provider value={location}>
      <GlobalStyles />
      <div id="sticky-footer__body">
        <Helmet>
          <title>Portfolio - Avi Schoenbrun</title>
        </Helmet>
        <Header />
        <main>{children}</main>
      </div>
      <footer id="site-footer">Footer</footer>
    </PageContext.Provider>
  );
};

export default LayoutMain;
