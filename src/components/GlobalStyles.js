import styled, { createGlobalStyle } from "styled-components/macro";

const colors = {
  blue: {
    base: "rgb(0, 31, 43)",
    dk: "rgb(0, 15, 20)",
  },
  yellow: {
    base: "rgb(255, 196, 0)",
    lt: "rgb(255, 210, 61)",
  },
  tan: {
    base: "rgb(91, 88, 75)",
    lt: "rgb(151, 145, 126)",
    xlt: "rgb(236, 234, 223)",
    dk: "rgb(66, 65, 59)",
  },
  green: { base: "rgb(12, 145, 62)" },
  orange: {
    base: "rgb(67, 21, 7)",
    greyLt: "rgb(208, 194, 149);",
    greyLt50: "rgba(208, 194, 149,0.5);",
  },
  red: { base: "rgb(166, 29, 0)" },
};

export const color = (color, variation) => {
  if (!variation) {
    if (!colors[color].base) {
      return colors[color];
    }
    return colors[color].base;
  }
  return colors[color][variation];
};

const GlobalStyles = createGlobalStyle`

  html, body, p, h1, h2, h3, h4, h5, h6 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body, p {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fira Sans', sans-serif;
  }

  a {
    color: ${color("yellow")};
    text-decoration: none;
    text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.75);
    transition: color 0.25s ease;
    &:hover,
    &:focus {
      color: ${color("yellow", "lt")};
    }
  }

  /* Sticky Footer */

  html, 
  body, 
  #___gatsby {
    margin: 0;
    overflow-x: hidden;
    height: 100%;
    scroll-behavior: smooth;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #sticky-footer__body {
    flex: 1 0 auto;
  }

  #site-footer {
    flex-shrink: 0;
  }
`;

export const PageSubTitle = styled.h2`
  color: ${color("tan")};
  margin: 0 0 40px;
  text-align: center;
  font-weight: 700;
`;

export const HeaderFooterText = styled.span`
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1em;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 5px 10px 5px;
  &:last-child {
    margin-right: 0;
    /* margin-bottom: 0; */
  }
  @media screen and (min-width: 760px) {
    margin: 0 10px 0 0;
    padding-right: 10px;
    border-right: 1px solid ${color("blue")};
    &:last-child {
      margin-right: 0;
      padding-right: 0;
      border-right: none;
    }
  }
`;

export const PageSection = styled.section`
  margin-bottom: 50px;
`;

export default GlobalStyles;
