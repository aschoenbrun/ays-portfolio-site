import React, { useRef, useEffect } from "react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";
import anime from "animejs";

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

const PTWaveItemStyles = styled.div`
  width: 10px;
  margin: 0 2px;
  background-color: white;
  border: 1px solid ${color("tan", "lt")};
  border-top-width: 0;
  opacity: 0.5;
`;

const animeStandard = {
  direction: "alternate",
  loop: true,
  autoplay: true,
  easing: "easeInOutSine",
};

const PTWaveItem = ({ type }) => {
  let heightArr;
  switch (type) {
    case "outer":
      heightArr = [7, 15];
      break;
    case "mid":
      heightArr = [17, 25];
      break;
    case "inner":
      heightArr = [27, 35];
      break;
    default:
      heightArr = [5, 35];
  }

  const animeRef = useRef();
  useEffect(() => {
    anime({
      ...animeStandard,
      targets: animeRef.current,
      duration: function () {
        return anime.random(750, 1500);
      },
      height: function () {
        return anime.random(...heightArr);
      },
    });
  });
  return <PTWaveItemStyles ref={animeRef} />;
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
