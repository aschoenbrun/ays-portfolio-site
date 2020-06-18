import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { ButtonStyles } from "./Button/Button";
import ButtonVidBg from "./Button/ButtonVidBg";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopStyles = styled(ButtonStyles)`
  border-radius: 50%;
`;

const BtnIconWrap = styled.div`
  position: relative;
  z-index: 100;
`;

const ScrollToTop = () => {
  const btnVariants = {
    initial: {
      opacity: 0,
      bottom: -30,
    },
    animate: {
      opacity: 1,
      y: 60,
    },
  };

  const handleScroll = (e) => {
    console.log(e);
  };

  return (
    <ScrollToTopStyles as={motion.button} onScroll={(e) => handleScroll(e)}>
      <ButtonVidBg />
      <BtnIconWrap>
        <FaAngleDoubleUp />
      </BtnIconWrap>
    </ScrollToTopStyles>
  );
};

export default ScrollToTop;
