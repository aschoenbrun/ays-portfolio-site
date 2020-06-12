import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { color } from "../GlobalStyles";

const FormSubSpinnerStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${color("tan", "dk")};
  height: 20px;
  width: 36px;
  padding: 7px 0;
  box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
  /* display: none; */
`;

const FormSubSpinnerDot = styled(motion.div)`
  width: 6px;
  height: 6px;
  background-color: ${color("yellow")};
`;

const parentVariants = {
  start: {
    x: -100,
    opacity: 0,
    transition: {
      staggerChildren: 0.25,
    },
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const dotVariants = {
  start: {
    x: 10,
  },
  end: {
    x: 21,
    rotate: 135,
    scale: 0.5,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};

const FormSubSpinner = () => {
  return (
    <FormSubSpinnerStyles
      variants={parentVariants}
      initial="start"
      animate="end"
    >
      <FormSubSpinnerDot variants={dotVariants} />
      <FormSubSpinnerDot variants={dotVariants} />
      <FormSubSpinnerDot variants={dotVariants} />
    </FormSubSpinnerStyles>
  );
};

export default FormSubSpinner;
