import React from "react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";
import { motion } from "framer-motion";

export const PageTitleStyles = styled.h1`
  color: ${color("blue")};
  margin: 0;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  span {
    display: block;
  }
`;

const PageTitleDivStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px auto 60px;
  width: 150px;
  height: 35px;
  border-top: 1px solid ${color("tan", "lt")};
`;

const PTWaveItemStyles = styled(motion.div)`
  width: 10px;
  margin: 0 2px;
  background-color: white;
  border: 1px solid ${color("tan", "lt")};
  border-top-width: 0;
  opacity: 0.5;
`;

const randNum = (x, type) => {
  const mult = x * 0.25;
  return type === "min"
    ? Math.random() * (x + mult - x) + (x + mult)
    : Math.random() * (x - (x - mult)) + x;
};

const randNumRange = (x, y, type) => {
  const randX = randNum(x, "min");
  const randY = randNum(y, "max");
  return type === "arr"
    ? [randX, randY]
    : Math.random() * (randY - randX) + randX;
};

const PTWaveItem = ({ type }) => {
  let heightArr;
  switch (type) {
    case "outer":
      heightArr = randNumRange(7, 17, "arr");
      break;
    case "mid":
      heightArr = randNumRange(10, 23, "arr");
      break;
    case "inner":
      heightArr = randNumRange(17, 30, "arr");
      break;
    default:
      heightArr = randNumRange(7, 25, "arr");
  }

  const ptWaveVariants = {
    small: {
      height: heightArr[0],
    },
    big: {
      height: heightArr[1],
      transition: {
        yoyo: Infinity,
        type: "tween",
        duration: randNumRange(0.5, 0.85),
        ease: "linear",
      },
    },
  };

  return (
    <PTWaveItemStyles variants={ptWaveVariants} initial="small" animate="big" />
  );
};

const PageTitle = ({ children }) => {
  return (
    <>
      <PageTitleStyles>{children}</PageTitleStyles>

      <PageTitleDivStyles>
        <PTWaveItem type={"outer"} />
        <PTWaveItem type={"mid"} />
        <PTWaveItem type={"inner"} />
        <PTWaveItem type={"mid"} />
        <PTWaveItem type={"outer"} />
      </PageTitleDivStyles>
    </>
  );
};

export default PageTitle;
