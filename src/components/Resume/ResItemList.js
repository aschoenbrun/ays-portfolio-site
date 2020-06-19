import React from "react";
import styled from "styled-components/macro";
import moment from "moment";
import { color } from "../GlobalStyles";
import SectionSubTitle from "../SectionSubTitle";
import ResItemSubListItems from "./ResItemSubListItems";
import SectionSubTitleDesc from "../SectionSubTitleDesc";

const ResItemListItem = styled.li`
  margin-right: ${(props) => props.dir.marginR};
  margin-bottom: 30px;
  @media screen and (min-width: 760px) {
    margin-bottom: 20px;
  }
`;

const InfoStyles = styled.span`
  display: block;
  margin-bottom: 5px;
  @media screen and (min-width: 760px) {
    margin-bottom: 0;
  }
`;

const InfoDivStyles = styled.span`
  display: none;
  margin: -1px 13px 0 10px;
  margin-bottom: 0;
  font-size: 11px;
  font-weight: 100;
  letter-spacing: -0.1em;
  color: ${color("tan", "lt")};
  @media screen and (min-width: 760px) {
    display: block;
  }
`;

const InfoToStyles = styled(InfoDivStyles)`
  display: block;
  margin: -8px 7px 0 4px;
  @media screen and (min-width: 760px) {
    margin-top: -1px;
  }
`;

const ResItemSubListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 25px;
  display: flex;
  flex-direction: ${(props) => props.dir.secItemList};
  flex-wrap: wrap;
  margin: ${(props) => props.dir.ulMargin};
`;

const InfoItemListLineBreak = styled.div`
  display: block;
  flex-basis: 100%;
  height: 0;
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

const ResItemList = ({ resSection, dir }) => {
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

    const fmtDate = (date) => {
      return moment(date).format("MMM YYYY");
    };

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
              return fmtDate(dateStart);
            case dateEnd:
              return fmtDate(dateEnd);
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
          <SectionSubTitleDesc>
            {info(company, true)}
            <InfoItemListLineBreak />
            {item.__typename === "SanityResumeEducation"
              ? info(location)
              : info(location, true)}
            <InfoItemListLineBreak />
            {info(dateStart, false, true)}
            {info(dateEnd)}
            {info(currentPosition)}
          </SectionSubTitleDesc>
        );
      }
      return null;
    };

    return (
      <ResItemListItem key={itemKey} dir={dir}>
        <SectionSubTitle>{itemTitle}</SectionSubTitle>
        <ItemInfo />
        <ResItemSubListUl dir={dir}>
          <ResItemSubListItems
            resListItem={item}
            itemTitle={itemTitle}
            dir={dir.secItemList}
          />
        </ResItemSubListUl>
      </ResItemListItem>
    );
  });
};

export default ResItemList;
