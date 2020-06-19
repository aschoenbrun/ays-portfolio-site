import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import GlobalStyles, { color } from "../GlobalStyles";
import styled from "styled-components/macro";
import { ListItemStyles } from "../ListItem";
import { ListItemDivStyles } from "../ListItemDiv";
import { useMediaQuery } from "react-responsive";

export const PageContext = React.createContext();
export const NavContext = React.createContext();

const navItemArr = [
  {
    name: "About",
    uri: "about",
  },
  {
    name: "Resume",
    uri: "resume",
  },
  {
    name: "Gallery",
    uri: "gallery",
  },
  {
    name: "Contact",
    uri: "contact",
  },
];

// const navHeight = `${navItemArr.length * 42 + 38 + 80}px`;

const ContentStyles = styled.main`
  position: relative;
  width: 85%;
  margin: 300px auto 0;
  @media screen and (min-width: 1024px) {
    width: 960px;
  }
  @media screen and (min-width: 1350px) {
    width: 1150px;
  }
  @media screen and (min-width: 960px) {
    margin-top: 275px;
  }
  /*position: relative;*/
  transition: opacity 0.5s;
  background-color: white;
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
  .react-markdown {
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      ${ListItemStyles.componentStyle.rules};
      &::before,
      &:before {
        ${ListItemDivStyles.componentStyle.rules};
        content: "\x0002F\x0002F";
      }
    }
  }
`;

const MenuBg = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
`;

const LayoutMain = ({ children, location }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const max960 = useMediaQuery({ maxWidth: 960 });
  console.log(navOpen);
  const MenuBgVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 0.75,
    },
  };

  return (
    <PageContext.Provider value={location}>
      <GlobalStyles />
      <div id="sticky-footer__body">
        <Helmet>
          <title>Portfolio - Avi Schoenbrun</title>
        </Helmet>
        <NavContext.Provider
          value={{ navOpen, setNavOpen, navItemArr, visible, setVisible }}
        >
          <Header />
          <ContentStyles>{children}</ContentStyles>
          <AnimatePresence>
            {navOpen && max960 && (
              <MenuBg
                variants={MenuBgVariants}
                initial="closed"
                animate="open"
                exit="closed"
              />
            )}
          </AnimatePresence>
        </NavContext.Provider>
      </div>
      <Footer id="site-footer" />
    </PageContext.Provider>
  );
};

export default LayoutMain;
