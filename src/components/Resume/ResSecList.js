import React, { useContext } from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
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
`;

const ResSubList = () => {
  const resSections = useContext(ResListContext);
  const list = resSections.map((resSection) => {
    return (
      <ResSection key={resSection.name}>
        <ResSecTitle>{resSection.name}</ResSecTitle>
        <ResItemListUl>
          <ResItemList resSection={resSection} />
        </ResItemListUl>
      </ResSection>
    );
  });

  return <ResSubListUl>{list}</ResSubListUl>;
};

export default ResSubList;
