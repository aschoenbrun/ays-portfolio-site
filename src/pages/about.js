import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import LayoutMain from "../components/LayoutMain";

const AboutMe = ({ data, location }) => {
  const { sanityPage: pageData } = data;
  const { pageTitle, intro, content } = pageData;
  console.log(pageData);
  return (
    <LayoutMain location={location}>
      <h1>{pageTitle}</h1>
      <h3>
        <ReactMarkdown source={intro} />
      </h3>
      <ReactMarkdown source={content} />
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