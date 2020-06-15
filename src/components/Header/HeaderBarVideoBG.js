import React from "react";
import styled from "styled-components/macro";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import cldnyUrlTrans from "../../scripts/cldnyUrlTrans";

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
  const vidOrigUrl =
    "https://res.cloudinary.com/aschoen/video/upload/v1590595130/AYS%20Portfolio%20Site%20Images/Background%20Videos/Abstract_-_26011_crdbg5.mp4";

  const min1200 = useMediaQuery({ minWidth: 1200 });
  const min1024 = useMediaQuery({ minWidth: 1024 });
  const min900 = useMediaQuery({ minWidth: 900 });
  const min768 = useMediaQuery({ minWidth: 768 });
  const min600 = useMediaQuery({ minWidth: 600 });
  const min480 = useMediaQuery({ minWidth: 480 });

  const vidSize = min1200
    ? { w: 1920, h: 300 }
    : min1024
    ? { w: 1210, h: 200 }
    : min900
    ? { w: 1035, h: 200 }
    : min768
    ? { w: 910, h: 200 }
    : min600
    ? { w: 775, h: 200 }
    : min480
    ? { w: 610, h: 200 }
    : { w: 490, h: 200 };

  const vidTrans = `w_${vidSize.w},h_${vidSize.h},f_auto,q_auto,vc_auto,c_fill`;

  const vidUrl = cldnyUrlTrans(vidOrigUrl, vidTrans);

  console.log(vidTrans);
  console.log(vidUrl);

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

  return (
    <HeaderBarVideoBGStyles
      blendMode={blendMode}
      variants={headerBarVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPlayer
        url={vidUrl}
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
