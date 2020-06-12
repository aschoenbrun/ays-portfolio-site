import React from "react";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";
import { motion } from "framer-motion";
import { ButtonStyles } from "../Button/Button";

const FormSentStatusStyles = styled(ButtonStyles)`
  &,
  &:hover,
  &:focus {
    padding: 11px 13px;
    margin-right: 10px;
    background-color: ${color("green")};
    color: white;
    cursor: default;
    box-shadow: 0px 0.5px 2px 0px rgba(0, 0, 0, 0.5);
  }
`;

const sentVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const FormSentStatus = () => {
  return (
    <FormSentStatusStyles
      as={motion.div}
      variants={sentVariants}
      initial="initial"
      animate="animate"
    >
      Sent
    </FormSentStatusStyles>
  );
};

export default FormSentStatus;
