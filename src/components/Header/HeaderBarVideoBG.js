import React from "react";
import styled from "styled-components/macro";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const HeaderBarVideoBGStyles = styled(motion.div)`
  mix-blend-mode: ${(props) => props.blendMode};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBarVideoBG = ({ opacity, blendMode }) => {
  const headerBarVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: opacity,
      transition: {
        type: "tween",
        duration: 2,
      },
    },
  };

  console.log(opacity);

  return (
    <HeaderBarVideoBGStyles
      blendMode={blendMode}
      variants={headerBarVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPlayer
        url="https://res.cloudinary.com/aschoen/video/upload/w_1920,h_150,f_auto,q_auto,vc_auto,c_fill/v1590595130/AYS%20Portfolio%20Site%20Images/Background%20Videos/Abstract_-_26011_crdbg5.mp4"
        className="react-player"
        playing
        muted
        loop
        controls={false}
        width="1920"
        height="1080"
      />
    </HeaderBarVideoBGStyles>
  );
};

export default HeaderBarVideoBG;
