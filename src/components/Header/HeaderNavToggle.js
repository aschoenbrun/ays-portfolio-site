import React, { useContext, useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ButtonStyles } from "../Button/Button";
import ButtonVidBg from "../Button/ButtonVidBg";
import { MdFilterList } from "react-icons/md";
import { NavContext } from "../Layouts/LayoutMain";
import { useMediaQuery } from "react-responsive";

const ToggleStyles = styled.li`
  margin-top: ${(props) => (props.min760 ? 0 : "4px")};
  width: 100%;
  display: flex;
  width: 100%;
  font-size: 20px;
  &,
  button {
    border-radius: ${(props) => (props.min760 ? "0 0 0 0" : "0 0 10px 10px")};
    &:focus {
      outline: none !important;
    }
  }
  button {
    display: flex;
    width: 100%;
    font-size: 20px;
    padding: ${(props) => (props.min760 ? "7px 13px 6px" : "6px 13px")};
  }
  @media screen and (min-width: 760px) {
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
  const min760 = useMediaQuery({ minWidth: 760 });
  const hoverClassRef = useRef("");
  const [hover, setHover] = useState(false);
  useEffect(() => {
    hover
      ? hoverClassRef.current.classList.add("hover")
      : hoverClassRef.current.classList.remove("hover");
  }, [hover]);

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
    <ToggleStyles visible={visible} min760={min760}>
      <ButtonStyles
        as={motion.button}
        initial="closed"
        animate={navOpen ? "open" : "closed"}
        onClick={() => setNavOpen(!navOpen)}
        variants={min760 && toggleButtonVariants}
        ref={hoverClassRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ButtonVidBg />
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
