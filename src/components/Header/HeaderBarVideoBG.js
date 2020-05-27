import React from "react";
import styled from "styled-components/macro";
import ReactPlayer from "react-player";

const HeaderBarVideoBGStyles = styled.div`
  mix-blend-mode: ${(props) => props.blendMode};
  opacity: ${(props) => props.opacity};
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
  return (
    <HeaderBarVideoBGStyles opacity={opacity} blendMode={blendMode}>
      <ReactPlayer
        url="https://res.cloudinary.com/aschoen/video/upload/w_1920,h_1080,f_auto,q_auto,vc_auto,c_fill/v1590595130/AYS%20Portfolio%20Site%20Images/Background%20Videos/Abstract_-_26011_crdbg5.mp4"
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
