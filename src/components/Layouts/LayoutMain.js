import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import HeaderMeta from "../Header/HeaderMeta";
import GlobalStyles, { color } from "../GlobalStyles";
import styled from "styled-components/macro";
import { ListItemStyles } from "../ListItem";
import { ListItemDivStyles } from "../ListItemDiv";
import { useMediaQuery } from "react-responsive";

export const PageContext = React.createContext();
export const NavContext = React.createContext();

const navItemArr = [
  {
    name: "Home",
    uri: "", // HOME
  },
  {
    name: "About",
    uri: "About", // HOME
  },
  {
    name: "Resume",
    uri: "Resume",
  },
  {
    name: "Gallery",
    uri: "Gallery",
  },
  {
    name: "Contact",
    uri: "Contact",
  },
];

// const navHeight = `${navItemArr.length * 42 + 38 + 80}px`;

const hdrCompPdg = "150px";

const ContentStyles = styled.main`
  position: relative;
  width: ${(props) => (props.pageType !== "homePage" ? "85%" : "100%")};
  margin: 0 auto;
  padding-top: 300px;
  @media screen and (min-width: 1024px) {
    width: ${(props) => (props.pageType !== "homePage" ? "760px" : "100%")};
  }
  @media screen and (min-width: 1350px) {
    width: ${(props) => (props.pageType !== "homePage" ? "1150px" : "100%")};
  }
  @media screen and (min-width: 760px) {
    padding-top: ${(props) =>
      props.pageType !== "homePage" ? "275px" : hdrCompPdg};
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

const LayoutMain = ({ children, location, pageData }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const max760 = useMediaQuery({ maxWidth: 760 });
  const MenuBgVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 0.75,
    },
  };

  return (
    <PageContext.Provider value={{ location, pageData, hdrCompPdg }}>
      <GlobalStyles />
      <div id="sticky-footer__body">
        <HeaderMeta />
        <NavContext.Provider
          value={{ navOpen, setNavOpen, navItemArr, visible, setVisible }}
        >
          <Header />
          <ContentStyles pageType={pageData._type} id="site-content">
            {children}
          </ContentStyles>
          <AnimatePresence>
            {navOpen && max760 && (
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
