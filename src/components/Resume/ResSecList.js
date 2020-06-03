import React, { useContext } from "react";
import styled from "styled-components/macro";
import { ResListContext } from "../../pages/resume";
import ResItemList from "./ResItemList";

const ResSubListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 50px;
`;

const ResSection = styled.li``;

const ResSecTitle = styled.h2``;

const ResItemListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px;
  display: flex;
  flex-direction: ${(props) => props.dir.secList};
  flex-wrap: wrap;
`;

const ResSubList = () => {
  const resSections = useContext(ResListContext);

  const list = resSections.map((resSection) => {
    console.log(resSection);

    let dir;
    switch (resSection.name) {
      case "Skills":
        dir = {
          secList: "column",
          secItemList: "row",
          marginR: "0",
          ulMargin: "0",
        };
        break;
      case "Education":
      case "References":
        dir = {
          secList: "row",
          secItemList: "row",
          marginR: "25px",
          ulMargin: "0 0 10px",
        };
        break;
      default:
        dir = {
          secList: "column",
          secItemList: "column",
          marginR: "0",
          ulMargin: "0",
        };
    }

    return (
      <ResSection key={resSection.name}>
        <ResSecTitle>{resSection.name}</ResSecTitle>
        <ResItemListUl dir={dir}>
          <ResItemList resSection={resSection} dir={dir} />
        </ResItemListUl>
      </ResSection>
    );
  });

  return <ResSubListUl>{list}</ResSubListUl>;
};

export default ResSubList;
