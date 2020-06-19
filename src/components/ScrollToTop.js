import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { ButtonStyles } from "./Button/Button";
import ButtonVidBg from "./Button/ButtonVidBg";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollToTopStyles = styled(ButtonStyles)`
  border-radius: 50%;
  bottom: 50px;
  position: fixed;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  font-size: 20px;
`;

const BtnIconWrap = styled.div`
  position: relative;
  z-index: 100;
`;

const ScrollToTop = () => {
  const hoverClassRef = useRef("");
  const [hover, setHover] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    hover
      ? hoverClassRef.current.classList.add("hover")
      : hoverClassRef.current.classList.remove("hover");
  }, [hover]);

  const btnVariants = {
    initial: {
      x: "-200px",
    },
    animate: {
      x: 0,
    },
  };

  return (
    <ScrollToTopStyles
      as={motion.button}
      variants={btnVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      ref={hoverClassRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => scrollToTop()}
    >
      <ButtonVidBg />
      <BtnIconWrap>
        <FaAngleDoubleUp />
      </BtnIconWrap>
    </ScrollToTopStyles>
  );
};

export default ScrollToTop;
