import React from "react";
import styled from "styled-components/macro";
import cldnyUrlTrans from "../../scripts/cldnyUrlTrans";

const GalleryImgStyles = styled.div`
  position: relative;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  overflow-y: hidden;
  img {
    width: 100%;
    display: block;
  }
`;

const GalleryImage = ({ glyImgUrl, glyImgAlt }) => {
  const imgUrl = cldnyUrlTrans(glyImgUrl, "f_auto,q_auto,c_scale,w_600");
  return (
    <GalleryImgStyles>
      <img src={imgUrl} alt={glyImgAlt} />
    </GalleryImgStyles>
  );
};

export default GalleryImage;
