import React from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import camelCase from "camelCase";

const ListStyles = styled.li``;

const ResItemSubListItems = ({ resListItem, itemTitle }) => {
  console.log(resListItem);
  const { accomplishments, listItems, email, phone, __typename } = resListItem;

  const ccItemTitle = camelCase(itemTitle);

  const accompList =
    accomplishments &&
    accomplishments.map((accomp) => {
      return (
        <ListStyles key={camelCase(itemTitle + accomp)}>{accomp}</ListStyles>
      );
    });

  const listItemList =
    listItems &&
    listItems.map((item) => {
      return <ListStyles key={camelCase(itemTitle + item)}>{item}</ListStyles>;
    });

  const list =
    __typename === "SanityResumeEducation" ? (
      accompList
    ) : __typename === "SanityResumeReference" ? (
      <>
        <ListStyles key={camelCase(itemTitle + "email")}>
          <a href={`mailto:${email}`}>{email}</a>
        </ListStyles>
        <ListStyles key={camelCase(itemTitle + "phone")}>{phone}</ListStyles>
      </>
    ) : (
      listItemList
    );

  return <>{list}</>;
};

export default ResItemSubListItems;
