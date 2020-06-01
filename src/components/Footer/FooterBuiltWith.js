import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import cldnyUrlTrans from "../../scripts/cldnyUrlTrans";
import styled from "styled-components/macro";
import { color, HeaderFooterText } from "../GlobalStyles";

const FooterBuiltWithStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 7px 0 15px;
  ul,
  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style-type: none;
    color: ${color("tan", "lt")};
  }
  ul {
    justify-content: center;
    padding-left: 0;
  }
  img {
    height: 20px;
    width: auto;
    margin-right: 5px;
  }
  h3 {
    display: block;
    width: 100%;
    font-size: 17px;
    margin: 0;
    padding-right: 0;
    color: ${color("tan", "lt")};
  }
`;

const FooterBuiltWith = () => {
  const query = graphql`
    query {
      sanitySiteInfo {
        builtWith {
          _key
          name
          icon {
            cloudinaryUrlField
            alt
          }
        }
      }
    }
  `;

  const builtWithItemArr = useStaticQuery(query).sanitySiteInfo.builtWith;

  const builtWithList = builtWithItemArr.map((builtWithItem) => {
    return (
      <HeaderFooterText as="li" key={builtWithItem._key}>
        <img
          src={cldnyUrlTrans(
            `${builtWithItem.icon.cloudinaryUrlField}`,
            "w_20,h_20,f_png,c_fit"
          )}
          alt={
            builtWithItem.icon.alt
              ? builtWithItem.icon.alt
              : builtWithItem.icon.name
          }
        />
        {builtWithItem.name}
      </HeaderFooterText>
    );
  });

  return (
    <FooterBuiltWithStyles>
      <HeaderFooterText as="h3">Built with</HeaderFooterText>
      <ul>{builtWithList}</ul>
    </FooterBuiltWithStyles>
  );
};

export default FooterBuiltWith;
