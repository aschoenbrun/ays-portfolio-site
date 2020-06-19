import React, { useContext } from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ButtonStyles } from "../Button/Button";
import { MdFilterList } from "react-icons/md";
import { NavContext } from "../Layouts/LayoutMain";
import { useMediaQuery } from "react-responsive";

const ToggleStyles = styled.li`
  margin-top: ${(props) => (props.max960 ? "4px" : 0)};
  width: 100%;
  display: flex;
  width: 100%;
  font-size: 20px;
  &,
  button {
    border-radius: ${(props) => (props.max960 ? "0 0 10px 10px" : "0 0 0 0")};
    &:focus {
      outline: none !important;
    }
  }
  button {
    display: flex;
    width: 100%;
    font-size: 20px;
    padding: ${(props) => (props.max960 ? "6px 13px" : "7px 13px 6px")};
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
  const max960 = useMediaQuery({ maxWidth: 960 });

  const iconVariantsMobile = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  };

  return (
    <ToggleStyles visible={visible} max960={max960}>
      <ButtonStyles as="button" onClick={() => setNavOpen(!navOpen)}>
        <BtnIconWrap
          variants={iconVariantsMobile}
          transition={{ type: "tween", duration: 0.75, delay: 0.5 }}
        >
          <MdFilterList />
        </BtnIconWrap>
      </ButtonStyles>
    </ToggleStyles>
  );
};

export default HeaderNavToggle;
