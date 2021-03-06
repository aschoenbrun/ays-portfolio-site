import React, { useRef, useEffect, useState } from "react";
import ButtonVidBg from "./ButtonVidBg";
import cldnyUrlTrans from "../../scripts/cldnyUrlTrans";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";

export const ButtonStyles = styled.a`
  position: relative;
  color: ${color("tan", "dk")};
  background-color: ${color("yellow")};
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1em;
  font-weight: 900;
  text-align: center;
  padding: 10px 13px;
  box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
  text-shadow: none;
  cursor: pointer;
  overflow: hidden;
  img,
  span {
    position: relative;
    z-index: 1;
    max-width: 290px;
  }
  img {
    height: 20px;
    width: auto;
    margin-right: 7px;
  }
  span {
    margin-top: 2px;
  }
  &:hover,
  &:focus {
    color: ${color("tan", "dk")};
    box-shadow: 0px 0.25px 2px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 0.1px 1px 0px rgba(0, 0, 0, 0.5);
  }
`;

const Button = ({ url, target, rel, iconUrl, text, type, classes }) => {
  const hoverClassRef = useRef("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    hover
      ? hoverClassRef.current.classList.add("hover")
      : hoverClassRef.current.classList.remove("hover");
  }, [hover]);

  return (
    <ButtonStyles
      className={classes ? `${classes} btn` : "btn"}
      as={type ? type : "a"}
      ref={hoverClassRef}
      href={url ? url : null}
      target={target ? target : "_blank"}
      rel={
        rel && (target === "_blank" || target === "")
          ? `${rel} noopener noreferrer`
          : rel
          ? rel
          : "noopener noreferrer"
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {iconUrl && (
        <img
          src={cldnyUrlTrans(iconUrl, "w_20,h_20,c_scale,f_png,q_auto")}
          alt={text}
        />
      )}
      <span>{text}</span>
      <ButtonVidBg />
    </ButtonStyles>
  );
};

export default Button;
