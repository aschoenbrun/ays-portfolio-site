import React from "react";
import { graphql } from "gatsby";
import { PageTitle } from "../components/GlobalStyles";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";
import Button from "../components/Button/Button";
import ResList from "../components/Resume/ResList";

export const ResListContext = React.createContext();

const Resume = ({ data, location }) => {
  const { sanityResume: pageData } = data;

  const { pageTitle, resumeIntro, sections } = pageData;

  return (
    <ResListContext.Provider value={sections}>
      <LayoutMain location={location}>
        <PageTitle>{pageTitle}</PageTitle>
        <PageIntro>{resumeIntro.introText}</PageIntro>
        <Button text="Download Resume" />
        <ResList />
      </LayoutMain>
    </ResListContext.Provider>
  );
};

export default Resume;

export const query = graphql`
  query {
    sanityResume {
      pageTitle
      resumeIntro {
        introText
        resumeURL
      }
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
