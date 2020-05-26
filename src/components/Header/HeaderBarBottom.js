import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import { HeaderFooterText } from "../GlobalStyles";

const HeaderBarBottomStyles = styled.div`
  background-color: ${color("tan", "dk")};
  position: relative;
  z-index: 900;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
  &::after {
    content: "";
    background-image: url("https://media.giphy.com/media/mG2pQXAWNl4Vt77Kef/giphy.gif");
    mix-blend-mode: multiply;
    background-size: cover;
    background-position: center calc(50% + 108px);
    background-repeat: no-repeat;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const HeaderContactInfoStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0;
  list-style-type: none;
  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;

const HeaderBarBottom = () => {
  const query = graphql`
    query {
      sanityMyInfo {
        email
        phone
        linkedIn
      }
    }
  `;

  const contactArr = Object.entries(useStaticQuery(query).sanityMyInfo);
  console.log(contactArr);
  const contactList = contactArr.map(([key, value]) => {
    let href, niceVal;
    switch (key) {
      case "email":
        href = `mailto:${value}`;
        niceVal = value;
        break;
      case "phone":
        href = `tel:${value}`;
        niceVal = value;
        break;
      case "linkedIn":
        href = `${value}`;
        niceVal = value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
        break;
      default:
        href = null;
        niceVal = null;
    }

    return (
      <HeaderFooterText as="li" key={key}>
        <a href={href}>{niceVal}</a>
      </HeaderFooterText>
    );
  });

  return (
    <HeaderBarBottomStyles>
      <HeaderContactInfoStyles>{contactList}</HeaderContactInfoStyles>
    </HeaderBarBottomStyles>
  );
};

export default HeaderBarBottom;
