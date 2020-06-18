import React, { useContext } from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { ButtonStyles } from "../Button/Button";
import { MdFilterList } from "react-icons/md";
import { NavContext } from "../Layouts/LayoutMain";

const ToggleStyles = styled.li`
  margin-top: 4px;
  width: 100%;
  button {
    display: flex;
    width: 100%;
    font-size: 20px;
    padding: 6px 13px;
  }
`;

const BtnIconWrap = styled(motion.div)`
  position: relative;
  z-index: 100;
`;

const HeaderNavToggle = () => {
  const { navOpen, setNavOpen } = useContext(NavContext);

  const iconVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  };

  return (
    <ToggleStyles>
      <ButtonStyles as="button" onClick={() => setNavOpen(!navOpen)}>
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
