import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";

const HeaderBarBottomStyles = styled.div`
  background-color: ${color("tan", "dk")};
  position: relative;
  z-index: 900;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
`;

const HeaderContactInfoStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
    let href;
    switch (key) {
      case "email":
        href = `mailto:${value}`;
        break;
      case "phone":
        href = `tel:${value}`;
        break;
      case "linkedIn":
        href = `${value}`;
        break;
      default:
        href = null;
    }

    return (
      <li key={key}>
        <a href={href}>{value}</a>
      </li>
    );
  });

  return (
    <HeaderBarBottomStyles>
      <HeaderContactInfoStyles>{contactList}</HeaderContactInfoStyles>
    </HeaderBarBottomStyles>
  );
};

export default HeaderBarBottom;
