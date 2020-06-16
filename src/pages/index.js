import React from "react";
import { graphql } from "gatsby";
import LayoutMain from "../components/Layouts/LayoutMain";
export default function Home({ data, location }) {
  // const { sanityPage: pageData } = data;

  return (
    <LayoutMain location={location}>
      <h1>Hello Gatsby!</h1>
      <p>Is this working?</p>
    </LayoutMain>
  );
}

export const query = graphql`
  query {
    sanityPage(id: { eq: "f54675b5-e743-552b-83a5-f2f069eb31fb" }) {
      pageTitle
      intro
      content
    }
  }
`;
