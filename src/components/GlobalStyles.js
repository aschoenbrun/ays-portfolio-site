import styled, { createGlobalStyle } from "styled-components/macro";

const colors = {
  blue: {
    base: "rgb(0, 31, 43)",
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

  html, body {
    font-family: 'Open Sans', sans-serif;
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

export default GlobalStyles;
