import React from "react";
import { graphql } from "gatsby";
import PageTitle from "../components/PageTitle";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";
import ContactForm from "../components/Forms/ContactForm";

const Contact = ({ data, location }) => {
  const { sanityCustPage: pageData } = data;
  const { pageTitle, intro, centerIntro } = pageData;

  return (
    <LayoutMain location={location} pageData={pageData}>
      <PageTitle>{pageTitle}</PageTitle>
      <PageIntro centerIntro={centerIntro}>{intro}</PageIntro>
      <ContactForm />
    </LayoutMain>
  );
};

export default Contact;

export const query = graphql`
  query {
    sanityCustPage(id: { eq: "af823fc8-df89-5a9e-b7a0-79f8f8fcb22d" }) {
      pageTitle
      intro
      centerIntro
    }
  }
`;
