import React from "react";
import { Link } from "gatsby";
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";

const ButtonStyles = styled(Link)`
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
  transition: 0.25s ease-out;
  img {
    height: 20px;
    width: auto;
    margin-right: 7px;
  }
  span {
    margin-top: 20px;
  }
  &:hover,
  &:focus {
    background-color: ${color("yellow", "lt")};
    color: ${color("tan", "dk")};
    box-shadow: 0px 0.25px 2px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 0.1px 1px 0px rgba(0, 0, 0, 0.5);
  }
`;

const Button = ({ url, target, rel, iconPubId, text }) => {
  return (
    <ButtonStyles to={url} target={target} rel={rel}>
      {iconPubId && (
        <Image cloudName="aschoen" alt={text} publicId={iconPubId}>
          <Transformation
            height="20"
            width="20"
            crop="scale"
            format="png"
            fetch="auto"
            quality="auto"
          />
        </Image>
      )}
      <span>{text}</span>
    </ButtonStyles>
  );
};

export default Button;
