import React from "react";
import { graphql } from "gatsby";
import PageTitle from "../components/PageTitle";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";

const gallery = ({ data, location }) => {
  const { sanityUiuxPage: pageData } = data;
  const { pageTitle, intro, centerIntro, galleryItems } = pageData;
  console.log(galleryItems);

  const galleryList = galleryItems.map((glyItem) => {
    const glyKey = glyItem._key;
    const glyName = glyItem.name;
    const glyImgUrl = glyItem.image.cloudinaryUrlField;
    const glyImgAlt = glyItem.image.alt;
    const glyTest = glyItem.testimonial;
    const glyTestEx = glyItem.testimonialExcerpt;
    const glyLink = glyItem.linkToPub;

    return (
      <li key={glyKey}>
        <h3>{glyName}</h3>
        <img src={glyImgUrl} alt={glyImgAlt} />
        {glyTest && <p>{glyTest}</p>}
        {glyLink && (
          <a
            href={glyLink}
            target="_blank"
            rel="noopener  
noreferrer"
          >
            View
          </a>
        )}
      </li>
    );
  });

  return (
    <LayoutMain location={location}>
      <PageTitle>{pageTitle}</PageTitle>
      <PageIntro centerIntro={centerIntro}>{intro}</PageIntro>
      <ul>{galleryList}</ul>
    </LayoutMain>
  );
};

export default gallery;

export const query = graphql`
  query {
    sanityUiuxPage(id: { eq: "741e3266-3206-5d7a-ad20-b376318487fa" }) {
      pageTitle
      intro
      centerIntro
      galleryItems {
        _key
        name
        image {
          cloudinaryUrlField
          alt
        }
        testimonial
        testimonialExcerpt
        linkToPub
      }
    }
  }
`;
