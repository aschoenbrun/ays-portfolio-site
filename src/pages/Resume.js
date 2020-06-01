import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import { PageTitle } from "../components/GlobalStyles";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";

const Resume = ({ data, location }) => {
  const { sanityResume: pageData } = data;
  console.log(pageData);

  const { pageTitle, resumeIntro, sections } = pageData;

  return (
    <LayoutMain location={location}>
      <PageTitle>{pageTitle}</PageTitle>
      <PageIntro>{resumeIntro.introText}</PageIntro>
    </LayoutMain>
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
