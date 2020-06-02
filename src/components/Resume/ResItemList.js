import React from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";

const ResItemListHeader = styled.h3``;

const ResItemListItem = styled.li``;

const ResListItemInfo = styled.p``;

const InfoDiv = styled.span``;

const ResItemSubList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px;
`;

const ResItemList = ({ resSection }) => {
  const resSecName = resSection.name;
  const resSecId = resSection._id;
  const resSubSection = resSection.resumeSubSections;

  return resSubSection.map((item) => {
    console.log(item);
    let itemTitle;
    switch (item.__typename) {
      case "SanityResumeSkill":
      case "SanityResumeReference":
        itemTitle = item.name;
        break;
      case "SanityResumeExperience":
        itemTitle = item.position;
        break;
      case "SanityResumeEducation":
        itemTitle = item.schoolName;
        break;
      default:
        itemTitle = null;
    }

    const itemKey = item._key;

    const ItemInfo = () => {
      const { location, company, dateStart, dateEnd, current } = item;

      if (location || company || dateStart || dateEnd || current) {
        return `${company && `${company} ${(<InfoDiv />)}`}
          ${location && `${location.state}, ${location.city} ${(<InfoDiv />)}`}
          ${dateStart && `${dateStart} > `}
          ${dateEnd && `${dateEnd} ${(<InfoDiv />)}`}
          ${current && `Present`}`;
      }
      return null;
    };

    return (
      <ResItemListItem key={itemKey}>
        <ResItemListHeader>{itemTitle}</ResItemListHeader>
        <ResListItemInfo>
          <ItemInfo />
        </ResListItemInfo>
        <ResItemSubList>{/* <ResItemSubList/> */}</ResItemSubList>
      </ResItemListItem>
    );
  });
};

export default ResItemList;
