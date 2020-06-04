import React from "react";
import camelCase from "camelCase";
import ListItem from "../ListItem";

const ResItemSubListItems = ({ resListItem, itemTitle, dir }) => {
  console.log(resListItem);
  const { accomplishments, listItems, email, phone, __typename } = resListItem;

  const accompList =
    accomplishments &&
    accomplishments.map((accomp) => {
      return (
        <ListItem key={camelCase(itemTitle + accomp)} dir={dir}>
          {accomp}
        </ListItem>
      );
    });

  const listItemList =
    listItems &&
    listItems.map((item) => {
      return (
        <ListItem key={camelCase(itemTitle + item)} dir={dir}>
          {item}
        </ListItem>
      );
    });

  const list =
    __typename === "SanityResumeEducation" ? (
      accompList
    ) : __typename === "SanityResumeReference" ? (
      <>
        {email && (
          <ListItem key={camelCase(itemTitle + "email")} dir={dir}>
            <a href={`mailto:${email}`}>{email}</a>
          </ListItem>
        )}
        {phone && (
          <ListItem key={camelCase(itemTitle + "phone")} dir={dir}>
            {phone}
          </ListItem>
        )}
      </>
    ) : (
      listItemList
    );

  return <>{list}</>;
};

export default ResItemSubListItems;
