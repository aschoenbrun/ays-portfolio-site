import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { color } from "../GlobalStyles";
import { ButtonStyles } from "../Button/Button";
import ButtonVidBg from "../Button/ButtonVidBg";
import { FaCommentMedical, FaCommentSlash } from "react-icons/fa";

const GalleryImgUtilStyles = styled(motion.div)`
  position: absolute;
  bottom: 4px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.glyTest ? "1fr auto auto" : "1fr auto"};
  grid-gap: 4px;
  width: calc(100% - 8px);
  margin: 0 4px;
`;

const GalleryNameStyles = styled.h2`
  padding: 7px 13px;
  background-color: rgba(0, 0, 0, 0.65);
  text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
  font-size: 15px;
  line-height: 1em;
  font-weight: 300;
  margin: 0;
  color: white;
  @media screen and (min-width: 420px) {
    font-size: 17px;
  }
`;

const GalleryUtilBtnStyles = styled(ButtonStyles)`
  font-size: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const GalleryTestStyles = styled.div`
  ${(props) => (props.glyTest ? "grid-column: 1 / 4" : "grid-column: 1 / 3")};
  background-color: rgba(0, 0, 0, 0.75);
  p {
    margin: 7px 13px;
    font-size: 13px;
    line-height: 1.65rem;
    font-weight: 300;
    font-style: italic;
    color: white !important;
    max-height: auto;
    text-shadow: 0px 0.5px 3px rgba(0, 0, 0, 0.75);
    max-height: 125px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${color("orange", "greyLt50")};
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${color("orange", "greyLt50")};
      box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
    }
  }
`;

const galUtilBarVariants = {
  open: {
    y: 0,
  },
  closed: {
    y: "calc(100% - 31px)",
  },
};

const GalleryUtils = ({ glyName, glyTest, glyLink }) => {
  const [galleryTestToggle, setGalleryTestToggle] = useState(false);
  const testClass = useRef();
  const toggleIcon = useRef();

  !galleryTestToggle
    ? (toggleIcon.current = <FaCommentMedical />)
    : (toggleIcon.current = <FaCommentSlash />);

  const GalleryTestBtn = () => {
    return glyTest ? (
      <GalleryUtilBtnStyles
        as="button"
        ref={toggleIcon}
        onClick={() => setGalleryTestToggle(!galleryTestToggle)}
      >
        {toggleIcon.current}
        <ButtonVidBg />
      </GalleryUtilBtnStyles>
    ) : null;
  };

  const GalleryTest = () => {
    return (
      glyTest && (
        <GalleryTestStyles>
          <p>{glyTest}</p>
        </GalleryTestStyles>
      )
    );
  };

  return (
    <GalleryImgUtilStyles
      glyTest={glyTest}
      ref={testClass}
      variants={galUtilBarVariants}
      initial="closed"
      animate={galleryTestToggle ? "open" : "closed"}
    >
      <GalleryNameStyles>{glyName}</GalleryNameStyles>
      <GalleryTestBtn />
      <GalleryTest />
    </GalleryImgUtilStyles>
  );
};

export default GalleryUtils;
