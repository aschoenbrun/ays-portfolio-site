import React, { useContext } from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ButtonStyles } from "../Button/Button";
import { MdFilterList } from "react-icons/md";
import { NavContext } from "../Layouts/LayoutMain";
import { useMediaQuery } from "react-responsive";

const ToggleStyles = styled.li`
  margin-top: ${(props) => (props.min960 ? 0 : "4px")};
  width: 100%;
  display: flex;
  width: 100%;
  font-size: 20px;
  &,
  button {
    border-radius: ${(props) => (props.min960 ? "0 0 0 0" : "0 0 10px 10px")};
    &:focus {
      outline: none !important;
    }
  }
  button {
    display: flex;
    width: 100%;
    font-size: 20px;
    padding: ${(props) => (props.min960 ? "7px 13px 6px" : "6px 13px")};
  }
  @media screen and (min-width: 960px) {
    &,
    button {
      border-radius: 0 0 0 0;
    }
  }
`;

const BtnIconWrap = styled(motion.div)`
  position: relative;
  z-index: 100;
`;

const HeaderNavToggle = () => {
  const { navOpen, setNavOpen, visible } = useContext(NavContext);
  const min960 = useMediaQuery({ minWidth: 960 });

  const iconVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  };

  const toggleButtonVariants = {
    closed: {
      paddingTop: "55px",
    },
    open: {
      paddingTop: "7px",
    },
  };

  return (
    <ToggleStyles visible={visible} min960={min960}>
      <ButtonStyles
        as={motion.button}
        initial="closed"
        animate={navOpen ? "open" : "closed"}
        onClick={() => setNavOpen(!navOpen)}
        variants={min960 && toggleButtonVariants}
      >
        <BtnIconWrap
          variants={iconVariants}
          transition={{ type: "tween", duration: 0.75, delay: 0.5 }}
        >
          <MdFilterList />
        </BtnIconWrap>
      </ButtonStyles>
    </ToggleStyles>
  );
};

export default HeaderNavToggle;
