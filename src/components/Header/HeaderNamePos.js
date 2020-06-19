import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";

const roleSpacing = "1.1rem";

const HeaderInfoWrapper = styled.div``;

const HeaderNameStyle = styled.h2`
  font-size: 27px;
  font-weight: 300;
  line-height: 1.1em;
  margin: 0 0 5px;
  @media screen and (min-width: 760px) {
    font-size: 45px;
    line-height: normal;
  }
`;

const HeaderPosWrapperStyle = styled.h3`
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0;
  color: ${color("tan", "lt")};
  opacity: 0.75;
  @media screen and (min-width: 760px) {
    font-size: 14px;
  }
  ul {
    display: block;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const HeaderPosStyle = styled.li`
  display: block;
  @media screen and (min-width: 760px) {
    display: inline;
    &:first-child {
      padding-right: ${roleSpacing};
      margin-right: ${roleSpacing};
      border-right: 1px solid ${color("tan")};
    }
    .scrolled & {
      padding-right: calc(${roleSpacing} - 0.5rem);
      margin-right: calc(${roleSpacing} - 0.5rem);
    }
  }
`;

const HeaderPos = ({ titleArr }) => {
  const titles = titleArr.map((title) => {
    return <HeaderPosStyle key={title}>{title}</HeaderPosStyle>;
  });
  return (
    <HeaderPosWrapperStyle>
      <ul>{titles}</ul>
    </HeaderPosWrapperStyle>
  );
};

const HeaderNamePos = () => {
  const query = graphql`
    query {
      sanityMyInfo {
        name
        titles
      }
    }
  `;

  const name = useStaticQuery(query).sanityMyInfo.name;
  const titles = useStaticQuery(query).sanityMyInfo.titles;

  return (
    <HeaderInfoWrapper>
      <HeaderNameStyle>{name}</HeaderNameStyle>
      <HeaderPos titleArr={titles} />
    </HeaderInfoWrapper>
  );
};

export default HeaderNamePos;
