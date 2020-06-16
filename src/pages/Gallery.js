import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components/macro";
import PageTitle from "../components/PageTitle";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";
import GalleryItem from "../components/Gallery/GalleryItem";

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

const gallery = ({ data, location }) => {
  const { sanityUiuxPage: pageData } = data;
  const { pageTitle, intro, centerIntro, galleryItems } = pageData;

  const galleryList = galleryItems.map((glyItem) => {
    const glyKey = glyItem._key;
    return <GalleryItem glyItem={glyItem} key={glyKey} />;
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
