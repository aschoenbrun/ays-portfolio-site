import React from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import ResItemSubListItems from "./ResItemSubListItems";

const ResItemListHeader = styled.h3``;

const ResItemListItem = styled.li``;

const ResListItemInfo = styled.p``;

const InfoStyles = styled.span``;

const InfoDivStyles = styled.span``;

const InfoToStyles = styled.span``;

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
      const { location, company, dateStart, dateEnd, currentPosition } = item;

      const info = (info, div, to) => {
        const infoProcessed = () => {
          switch (info) {
            case company:
              return company;
            case location:
              return `${location.city}, ${location.state}`;
            case dateStart:
              return dateStart;
            case dateEnd:
              return dateEnd;
            case currentPosition:
              return "Present";
            default:
              return null;
          }
        };
        const infoComp = <InfoStyles>{infoProcessed(info)}</InfoStyles>;
        const infoDiv = <InfoDivStyles>&#47;&#47;</InfoDivStyles>;
        const infoTo = <InfoToStyles>&rsaquo;</InfoToStyles>;
        return (
          <>
            {info && infoComp}
            {info && div && infoDiv}
            {info && to && infoTo}
          </>
        );
      };

      if (location || company || dateStart || dateEnd || currentPosition) {
        return (
          <>
            {info(company, true)}
            {item.__typename === "SanityResumeEducation"
              ? info(location)
              : info(location, true)}
            {info(dateStart, false, true)}
            {info(dateEnd)}
            {info(currentPosition)}
          </>
        );
      }
      return null;
    };

    return (
      <ResItemListItem key={itemKey}>
        <ResItemListHeader>{itemTitle}</ResItemListHeader>
        <ResListItemInfo>
          <ItemInfo />
        </ResListItemInfo>
        <ResItemSubList>
          <ResItemSubListItems resListItem={item} itemTitle={itemTitle} />
        </ResItemSubList>
      </ResItemListItem>
    );
  });
};

export default ResItemList;
