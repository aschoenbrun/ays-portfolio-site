import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import PageTitle from "../components/PageTitle";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";
import Button from "../components/Button/Button";
import HpBanner from "../components/HomePage/HpBanner";

const AboutMe = ({ data, location }) => {
  const { sanityHomePage: pageData } = data;
  const {
    hpIntro,
    hpBanner,
    hpServiceBlockLT,
    hpServiceBlockRT,
    _type,
  } = pageData;

  console.log(hpIntro);
  console.log(hpBanner);
  console.log(hpServiceBlockLT);
  console.log(hpServiceBlockRT);
  console.log(data);

  return (
    <LayoutMain location={location} pageData={pageData}>
      <HpBanner imgOrigUrl={hpBanner.bannerImgUrl.cloudinaryUrlField} />
    </LayoutMain>
  );
};

export default AboutMe;

export const query = graphql`
  query {
    sanityHomePage(id: { eq: "f5eb4dd0-87df-59ba-a4c9-a6342099c723" }) {
      _type
      hpIntro
      hpBanner {
        bannerImgUrl {
          cloudinaryUrlField
          alt
        }
        bannerTextTop
        bannerTextBottom
      }
      hpServiceBlockLT {
        blockTitle
        blockText
      }
      hpServiceBlockRT {
        blockTitle
        blockText
      }
    }
  }
`;
