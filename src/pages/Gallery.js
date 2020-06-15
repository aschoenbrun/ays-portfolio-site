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
    const glyLink = glyItem.linkToPub;

    const GalleryStyles = styled.ul`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 25px;
      margin: 50px 0 0;
      padding: 0;
      list-style-type: none;
      @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
      @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        grid-gap: 50px;
      }
    `;

    const GalleryItemStyles = styled.li`
      display: block;
      position: relative;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
      overflow-y: hidden;
      img {
        width: 100%;
        display: block;
      }
    `;

    return (
      <GalleryItemStyles key={glyKey}>
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
      </GalleryItemStyles>
    );
  });

  return (
    <LayoutMain location={location}>
      <PageTitle>{pageTitle}</PageTitle>
      <PageIntro centerIntro={centerIntro}>{intro}</PageIntro>
      <GalleryStyles>{galleryList}</GalleryStyles>
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
