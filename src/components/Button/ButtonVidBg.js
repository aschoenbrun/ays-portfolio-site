import React from "react";
import styled from "styled-components/macro";
import ReactPlayer from "react-player";

const ButtonVidBgStyles = styled.div`
  mix-blend-mode: luminosity;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
  .hover & {
    opacity: 0.7;
  }
`;

const ButtonVidBg = () => {
  return (
    <ButtonVidBgStyles>
      <ReactPlayer
        url="https://res.cloudinary.com/aschoen/video/upload/c_crop,f_auto,h_150,q_auto,w_800/v1591035165/AYS%20Portfolio%20Site%20Images/Background%20Videos/Triangles_-_7257_vfhb9h.mp4"
        className="react-player"
        playing
        muted
        loop
        controls={false}
        width="800"
        height="150"
      />
    </ButtonVidBgStyles>
  );
};

export default ButtonVidBg;
