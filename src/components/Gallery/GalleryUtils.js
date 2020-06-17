import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { color } from "../GlobalStyles";
import Button, { ButtonStyles } from "../Button/Button";
import ButtonVidBg from "../Button/ButtonVidBg";
import {
  FaCommentMedical,
  FaCommentSlash,
  FaSearchPlus,
  FaPlay,
} from "react-icons/fa";

const GalleryImgUtilStyles = styled(motion.div)`
  position: absolute;
  bottom: 4px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.glyTest || props.glyLink
      ? "1fr auto auto"
      : props.glyTest && props.glyLink
      ? "1fr auto auto auto"
      : "1fr auto"};
  grid-gap: 4px;
  width: calc(100% - 8px);
  margin: 0 4px;
  .site-link {
    padding: 0 13px;
  }
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
  padding: 3px 10px 0;
  display: flex;
  align-items: center;
`;

const GalleryTestStyles = styled.div`
  ${(props) =>
    props.glyTest || props.glyLink
      ? "grid-column: 1 / 4"
      : props.glyTest && props.glyLink
      ? "grid-column: 1 / 5"
      : "grid-column: 1 / 3"};
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

const BtnIconWrap = styled.div`
  position: relative;
  z-index: 100;
`;

const galUtilBarVariants = {
  open: {
    y: 0,
  },
  closed: {
    y: "calc(100% - 31px)",
  },
};

const GalleryUtils = ({
  glyName,
  glyImgUrl,
  glyTest,
  glyLink,
  setLtbxState,
}) => {
  const [galleryTestToggle, setGalleryTestToggle] = useState(false);
  const testClass = useRef();
  const toggleIcon = useRef();
  const [hover, setHover] = useState(false);

  !galleryTestToggle
    ? (toggleIcon.current = <FaCommentMedical />)
    : (toggleIcon.current = <FaCommentSlash />);

  useEffect(() => {
    if (toggleIcon.current.classList) {
      hover
        ? toggleIcon.current.classList.add("hover")
        : toggleIcon.current.classList.remove("hover");
    }
  }, [hover]);

  const GalleryTestBtn = () => {
    return glyTest ? (
      <GalleryUtilBtnStyles
        as="button"
        ref={toggleIcon}
        onClick={() => setGalleryTestToggle(!galleryTestToggle)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ButtonVidBg />
        <BtnIconWrap>{toggleIcon.current}</BtnIconWrap>
      </GalleryUtilBtnStyles>
    ) : null;
  };

  const GalleryTest = () => {
    return (
      glyTest && (
        <GalleryTestStyles glyTest={glyTest}>
          <p>{glyTest}</p>
        </GalleryTestStyles>
      )
    );
  };

  const GalleryLbToggleBtn = () => {
    const hoverClassRef = useRef("");
    const [hover, setHover] = useState(false);
    useEffect(() => {
      hover
        ? hoverClassRef.current.classList.add("hover")
        : hoverClassRef.current.classList.remove("hover");
    }, [hover]);
    return (
      <GalleryUtilBtnStyles
        as="button"
        ref={hoverClassRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() =>
          setLtbxState({
            toggle: true,
            glyName: glyName,
            glyImgUrl: glyImgUrl,
          })
        }
      >
        <ButtonVidBg />
        <BtnIconWrap>
          <FaSearchPlus />
        </BtnIconWrap>
      </GalleryUtilBtnStyles>
    );
  };

  const goToSiteIcon = <FaPlay />;

  return (
    <GalleryImgUtilStyles
      glyTest={glyTest}
      glyLink={glyLink}
      ref={testClass}
      variants={galUtilBarVariants}
      initial="closed"
      animate={galleryTestToggle ? "open" : "closed"}
    >
      <GalleryNameStyles>{glyName}</GalleryNameStyles>
      <GalleryTestBtn />
      <GalleryLbToggleBtn />
      {glyLink && (
        <Button
          classes="site-link"
          url={glyLink}
          text={goToSiteIcon}
          rel="nofollow noopener noreferrer"
        />
      )}
      <GalleryTest />
    </GalleryImgUtilStyles>
  );
};

export default GalleryUtils;
