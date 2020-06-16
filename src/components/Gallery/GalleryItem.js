import React from "react";
import styled from "styled-components/macro";
import GalleryImage from "./GalleryImage";
import GalleryUtils from "./GalleryUtils";

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

const GalleryItem = ({ glyItem }) => {
  const glyName = glyItem.name;
  const glyImgUrl = glyItem.image.cloudinaryUrlField;
  const glyImgAlt = glyItem.image.alt;
  const glyTest = glyItem.testimonial;
  const glyLink = glyItem.linkToPub;

  return (
    <GalleryItemStyles>
      <GalleryImage glyImgUrl={glyImgUrl} glyImgAlt={glyImgAlt} />
      <GalleryUtils glyName={glyName} glyTest={glyTest} glyLink={glyLink} />
    </GalleryItemStyles>
  );
};

export default GalleryItem;
