import React from "react";
import { graphql } from "gatsby";
import PageTitle from "../components/PageTitle";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";
import ResSecList from "../components/Resume/ResSecList";

export const ResListContext = React.createContext();

const Resume = ({ data, location }) => {
  const { sanityResume: pageData } = data;

  const { pageTitle, resumeIntro, sections } = pageData;

  return (
    <ResListContext.Provider value={sections}>
      <LayoutMain location={location} pageData={pageData}>
        <PageTitle>{pageTitle}</PageTitle>
        <PageIntro
          btnText="Download Resume"
          btnLink="https://drive.google.com/file/d/1AGvWxB94L4l35wCuf2VrTpt4IP6RYG3m/view?usp=sharing"
        >
          {resumeIntro.introText}
        </PageIntro>
        <ResSecList />
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
