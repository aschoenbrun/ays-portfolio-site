import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import PageTitle from "../components/PageTitle";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";
import Button from "../components/Button/Button";

const AboutMe = ({ data, location }) => {
  const { sanityPage: pageData } = data;
  const { pageTitle, intro, content } = pageData;

  return (
    <LayoutMain location={location} pageData={pageData}>
      <PageTitle>{pageTitle}</PageTitle>
      <PageIntro>{intro}</PageIntro>
      <ReactMarkdown source={content} className="react-markdown" />
      <Button text="View Resume" url="/Resume/#site-content" target="_parent" />
    </LayoutMain>
  );
};

export default AboutMe;

export const query = graphql`
  query {
    sanityPage(id: { eq: "f54675b5-e743-552b-83a5-f2f069eb31fb" }) {
      pageTitle
      intro
      content
    }
  }
`;
