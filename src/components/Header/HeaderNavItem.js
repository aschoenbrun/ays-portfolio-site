import React, { useRef, useEffect, useState, useContext } from "react";
import { Link } from "gatsby";
import { PageContext } from "../Layouts/LayoutMain";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import ButtonVidBG from "../Button/ButtonVidBg";

const HeaderNavItemStyles = styled.li`
  display: block;
  position: relative;
  text-transform: uppercase;
  background-color: ${color("yellow")};
  width: 100%;
  margin: 4px 0 0;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 0.25s ease-out;
  cursor: pointer;
  @media screen and (min-width: 960px) {
    width: auto;
    margin: 0 6px 4px 0;
    box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
  }
  &:last-child {
    margin-right: 0;
    border-bottom-width: 4px;
  }
  &:hover,
  &:focus {
    @media screen and (min-width: 960px) {
      margin-bottom: 0;
      box-shadow: 0px 0.25px 2px 0px rgba(0, 0, 0, 0.5);
    }
  }
  @media screen and (min-width: 960px) {
    &:active {
      margin-bottom: -1;
      box-shadow: 0px 0.1px 1px 0px rgba(0, 0, 0, 0.5);
    }
  }
  a,
  button {
    color: ${color("tan", "dk")};
    background-color: transparent;
    box-shadow: none;
    display: block;
    padding: 13px 0;
    font-size: 12px;
    line-height: 1em;
    font-weight: 900;
    text-align: center;
    text-shadow: none;
    transition: 0.5s;
    position: relative;
    z-index: 1;
    @media screen and (min-width: 960px) {
      padding: 13px 15px 10px;
    }
    &:hover,
    &:focus {
      color: ${color("tan", "dk")};
      @media screen and (min-width: 960px) {
        padding: 17px 15px 10px;
      }
    }
    &:active {
      @media screen and (min-width: 960px) {
        padding: 18px 15px 9px;
      }
    }
  }
  &.active {
    &,
    &:hover,
    &:focus {
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
      @media screen and (min-width: 960px) {
        box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
      }
      a,
      button {
        @media screen and (min-width: 960px) {
          padding: 17px 15px 10px;
          background-color: ${color("orange", "greyLt")};
        }
        div {
          opacity: 0;
        }
      }
    }
  }
  button {
    width: 100%;
  }
  span {
    position: relative;
    z-index: 1;
  }
`;

const HeaderNavItem = ({ navItem }) => {
  const hoverClassRef = useRef("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    hover
      ? hoverClassRef.current.classList.add("hover")
      : hoverClassRef.current.classList.remove("hover");
  }, [hover]);
  const pageContext = useContext(PageContext);
  return (
    <HeaderNavItemStyles
      ref={hoverClassRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`/${navItem.uri}/` === pageContext.pathname ? "active" : null}
    >
      <Link to={`/${navItem.uri}/`}>
        <ButtonVidBG />
        <span>{navItem.name}</span>
      </Link>
    </HeaderNavItemStyles>
  );
};

export default HeaderNavItem;
