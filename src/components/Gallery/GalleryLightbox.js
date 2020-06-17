import React, { useRef } from "react";
import styled from "styled-components/macro";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { color } from "../GlobalStyles";
import cldnyUrlTrans from "../../scripts/cldnyUrlTrans";

const GalleryLightboxStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5000;
  background-color: rgba(0, 0, 0, 0.9);
  transition: 0.25s;
  padding: 20px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

const CloseGlyBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: ${color("yellow")};
  text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.65);
  transition: 0.5s;
  font-size: 23px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border: none;
  &,
  &:hover,
  &:focus {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    padding: 5px;
  }
  &:hover,
  &:focus {
    color: ${color("yellow", "lt")};
    text-shadow: 0px 0.25px 2px rgba(0, 0, 0, 0.75);
    background-color: rgba(0, 0, 0, 0.75);
    font-size: 20px;
  }
  &:active {
    text-shadow: 0px 0.1px 1px rgba(0, 0, 0, 0.75);
  }
`;

const GalleryImageName = styled.h2`
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 5px 5px 7px;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.75);
  text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.75);
`;

const bgVariants = {
  closed: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
  open: {
    display: "flex",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
};

const imgVariants = {
  closed: {
    y: "100vh",
  },
  open: {
    y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      mass: 3,
      velocity: 2,
      damping: 20,
    },
  },
};

const GalleryLightbox = ({ ltbxState, setLtbxState }) => {
  const { toggle, glyImgUrl, glyName } = ltbxState;

  let lbOpacity = useRef("");

  return (
    <AnimatePresence>
      {toggle && (
        <GalleryLightboxStyles
          ref={lbOpacity}
          variants={bgVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.img
            variants={imgVariants}
            src={cldnyUrlTrans(glyImgUrl, "f_auto,q_auto,c_scale,w_1920")}
            alt={glyName}
          />
          <CloseGlyBtn
            onClick={() =>
              setLtbxState({
                ...ltbxState,
                toggle: false,
              })
            }
          >
            <FaTimes />
          </CloseGlyBtn>
          <GalleryImageName>{glyName}</GalleryImageName>
        </GalleryLightboxStyles>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
