import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components/macro";
import ResItemList from "./ResItemList";
import SectionTitle from "../SectionTitle";

const ResSubListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 50px;
`;

const ResSection = styled.li`
  margin-bottom: 50px;
`;

const ResItemListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px;
  display: flex;
  flex-direction: ${(props) => props.dir.secList};
  flex-wrap: wrap;
`;

const ResSubList = () => {
  const query = graphql`
    query {
      sanityResume {
        sections {
          name
          resumeSubSections {
            ... on SanityResumeSkill {
              _key
              name
              listItems
            }
            ... on SanityResumeExperience {
              _key
              position
              company
              location {
                city
                state
              }
              dateStart
              dateEnd
              currentPosition
              listItems
            }
            ... on SanityResumeEducation {
              _key
              schoolName
              location {
                city
                state
              }
              accomplishments
            }
            ... on SanityResumeReference {
              _key
              name
              email
              phone
            }
          }
        }
      }
    }
  `;

  const staticQuery = useStaticQuery(query);
  const resSections = staticQuery.sanityResume.sections;

  const list = resSections.map((resSection) => {
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
          marginR: "40px",
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
        <SectionTitle>{resSection.name}</SectionTitle>
        <ResItemListUl dir={dir}>
          <ResItemList resSection={resSection} dir={dir} />
        </ResItemListUl>
      </ResSection>
    );
  });

  return <ResSubListUl>{list}</ResSubListUl>;
};

export default ResSubList;
