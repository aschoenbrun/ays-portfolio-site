import React, { useContext } from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import { ResListContext } from "../../pages/resume";

const ResListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 50px;
`;

const ResSection = styled.li``;

const ResSecTitle = styled.h3``;

const ResList = () => {
  const resSections = useContext(ResListContext);

  console.log(resSections);

  const ResSecList = () =>
    resSections.map((resSection) => {
      return (
        <ResSection key={resSection.name}>
          <ResSecTitle>{resSection.name}</ResSecTitle>
        </ResSection>
      );
    });

  return (
    <ResListUl>
      <ResSecList />
    </ResListUl>
  );
};

export default ResList;
